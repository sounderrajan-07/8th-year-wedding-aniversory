// Generate high quality romantic instrumental melody for wedding anniversary
const fs = require('fs');
const path = require('path');

const sampleRate = 44100;
const durationSeconds = 48; // 48 seconds loopable
const numSamples = sampleRate * durationSeconds;
const numChannels = 2;
const bytesPerSample = 2;
const blockAlign = numChannels * bytesPerSample;
const byteRate = sampleRate * blockAlign;
const dataSize = numSamples * blockAlign;

// WAV Header
const buffer = Buffer.alloc(44 + dataSize);
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // SubChunk1Size (16 for PCM)
buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
buffer.writeUInt16LE(numChannels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(byteRate, 28);
buffer.writeUInt16LE(blockAlign, 32);
buffer.writeUInt16LE(16, 34); // BitsPerSample
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

// Chord progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4 -> G
// Notes frequencies in Hz
const notes = {
  C3: 130.81, E3: 164.81, G3: 196.00, B3: 246.94,
  A2: 110.00, C4: 261.63, E4: 329.63, G4: 392.00, B4: 493.88,
  F2: 87.31,  A3: 220.00, D4: 293.66, F4: 349.23, A4: 440.00,
  G2: 98.00,  D3: 146.83, C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99
};

const chords = [
  // C major 9 (4 bars = 8 seconds)
  { bass: notes.C3, arpeggio: [notes.C3, notes.G3, notes.E4, notes.G4, notes.B4, notes.C5, notes.G4, notes.E4] },
  // A minor 9 (4 bars = 8 seconds)
  { bass: notes.A2, arpeggio: [notes.A2, notes.E3, notes.C4, notes.E4, notes.G4, notes.B4, notes.G4, notes.E4] },
  // F major 7 (4 bars = 8 seconds)
  { bass: notes.F2, arpeggio: [notes.F2, notes.C3, notes.A3, notes.C4, notes.E4, notes.A4, notes.E4, notes.C4] },
  // G sus4 to G (4 bars = 8 seconds)
  { bass: notes.G2, arpeggio: [notes.G2, notes.D3, notes.G3, notes.C4, notes.D4, notes.G4, notes.D4, notes.B3] },
  // Second round with higher variation
  { bass: notes.C3, arpeggio: [notes.C3, notes.G3, notes.E4, notes.G4, notes.C5, notes.E5, notes.C5, notes.G4] },
  { bass: notes.A2, arpeggio: [notes.A2, notes.E3, notes.C4, notes.G4, notes.C5, notes.E5, notes.C5, notes.G4] }
];

// Melody notes (time in seconds, freq, duration)
const melody = [
  { t: 0.5, f: notes.E5, d: 2.0 },
  { t: 2.5, f: notes.D5, d: 1.5 },
  { t: 4.0, f: notes.C5, d: 3.5 },
  { t: 8.5, f: notes.G4, d: 1.5 },
  { t: 10.0, f: notes.A4, d: 2.0 },
  { t: 12.0, f: notes.C5, d: 3.5 },
  { t: 16.5, f: notes.E5, d: 2.0 },
  { t: 18.5, f: notes.G5, d: 2.5 },
  { t: 21.0, f: notes.E5, d: 2.5 },
  { t: 24.5, f: notes.D5, d: 3.0 },
  { t: 27.5, f: notes.C5, d: 2.0 },
  { t: 29.5, f: notes.D5, d: 2.2 },
  { t: 32.5, f: notes.E5, d: 3.0 },
  { t: 35.5, f: notes.G5, d: 2.0 },
  { t: 37.5, f: notes.E5, d: 2.5 },
  { t: 40.0, f: notes.D5, d: 2.0 },
  { t: 42.0, f: notes.C5, d: 5.0 }
];

let offset = 44;
const chordDuration = 8; // 8 seconds per chord

for (let i = 0; i < numSamples; i++) {
  const t = i / sampleRate;
  
  // Which chord
  const chordIndex = Math.floor((t % (chords.length * chordDuration)) / chordDuration);
  const currentChord = chords[chordIndex];
  
  // Arpeggio note (each note 0.5s)
  const arpIndex = Math.floor((t % chordDuration) * 2) % currentChord.arpeggio.length;
  const arpFreq = currentChord.arpeggio[arpIndex];
  const arpPhase = t % 0.5;
  const arpEnv = Math.exp(-arpPhase * 4.5); // Plucked piano envelope
  
  // Piano tone (sine + gentle harmonics)
  const piano = (
    Math.sin(2 * Math.PI * arpFreq * t) * 0.7 +
    Math.sin(4 * Math.PI * arpFreq * t) * 0.25 +
    Math.sin(6 * Math.PI * arpFreq * t) * 0.1
  ) * arpEnv * 0.25;
  
  // Warm Bass pad
  const bass = (
    Math.sin(2 * Math.PI * currentChord.bass * t) * 0.6 +
    Math.sin(4 * Math.PI * currentChord.bass * t) * 0.2
  ) * 0.18;
  
  // Flute / Violin lead melody
  let lead = 0;
  for (const m of melody) {
    if (t >= m.t && t < m.t + m.d) {
      const relT = t - m.t;
      // Gentle flute envelope: soft attack, steady, soft release
      const attack = Math.min(1, relT / 0.3);
      const release = Math.max(0, (m.d - relT) / 0.5);
      const env = attack * Math.min(1, release);
      
      // Vibrato
      const vibrato = Math.sin(2 * Math.PI * 5 * t) * 2.5;
      const freq = m.f + vibrato;
      
      lead = (
        Math.sin(2 * Math.PI * freq * t) * 0.7 +
        Math.sin(4 * Math.PI * freq * t) * 0.2 +
        Math.sin(6 * Math.PI * freq * t) * 0.1
      ) * env * 0.35;
      break;
    }
  }

  // Master fade in (first 2s) and fade out (last 2s) for smooth looping
  let masterFade = 1;
  if (t < 2.0) masterFade = t / 2.0;
  if (t > durationSeconds - 2.0) masterFade = (durationSeconds - t) / 2.0;

  const leftSample = Math.max(-1, Math.min(1, (piano * 0.8 + bass + lead * 0.9) * masterFade));
  const rightSample = Math.max(-1, Math.min(1, (piano * 0.9 + bass + lead * 0.85) * masterFade));

  const leftInt = Math.floor(leftSample * 32767);
  const rightInt = Math.floor(rightSample * 32767);

  buffer.writeInt16LE(leftInt, offset);
  buffer.writeInt16LE(rightInt, offset + 2);
  offset += 4;
}

const outputPath = path.join(__dirname, '..', 'public', 'music', 'romantic-melody.wav');
fs.writeFileSync(outputPath, buffer);
console.log('Romantic melody generated successfully at:', outputPath);
