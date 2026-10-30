import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

export interface MusicPlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

interface MusicPlayerProps {
  autoPlayOnMount?: boolean;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(({
  autoPlayOnMount = true
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);

  // ONLY SONG.mpeg will play
  const audioSrc = '/music/SONG.mpeg';
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 1.0;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setAudioBlocked(false);
      })
      .catch((err) => {
        console.log('Mobile browser autoplay deferred until user touch:', err);
        setAudioBlocked(true);
      });
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  useImperativeHandle(ref, () => ({
    play: playAudio,
    pause: pauseAudio,
    toggle: togglePlay
  }));

  // Automatic play on open & mobile touch listener
  useEffect(() => {
    if (!autoPlayOnMount) return;

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1.0;
      
      // Attempt direct autoplay
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioBlocked(false);
          })
          .catch(() => {
            setAudioBlocked(true);

            // On mobile devices, start playing on the very first touch anywhere on screen
            const unlockAudioOnTouch = () => {
              if (audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                    setAudioBlocked(false);
                  })
                  .catch(() => {});
              }
              window.removeEventListener('touchstart', unlockAudioOnTouch);
              window.removeEventListener('touchend', unlockAudioOnTouch);
              window.removeEventListener('click', unlockAudioOnTouch);
              window.removeEventListener('scroll', unlockAudioOnTouch);
            };

            window.addEventListener('touchstart', unlockAudioOnTouch, { passive: true });
            window.addEventListener('touchend', unlockAudioOnTouch, { passive: true });
            window.addEventListener('click', unlockAudioOnTouch);
            window.addEventListener('scroll', unlockAudioOnTouch, { passive: true });
          });
      }
    }
  }, [autoPlayOnMount]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* ONLY SONG.mpeg Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Audio Controller for Mobile */}
      <aside aria-label="பின்னணி இசை" className="fixed bottom-4 right-4 z-40 select-none">
        <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-full bg-midnight-card/95 backdrop-blur-xl border border-gold-500/40 shadow-gold-glow">
          
          {/* Animated Music Note / Equalizer */}
          <div className="relative flex items-center justify-center p-1.5 rounded-full bg-burgundy-900/80 text-gold-400">
            <Music className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-gold-300' : ''}`} />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
              </span>
            )}
          </div>

          {/* Status Label on mobile/desktop */}
          <div className="text-left pr-1">
            <p className="text-[11px] font-tamil font-bold text-ivory">
              {isPlaying ? 'பாடல் ஒலிக்கிறது 🎵' : 'SONG.mpeg'}
            </p>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-1.5 sm:p-2 rounded-full bg-gold-500 hover:bg-gold-400 text-midnight transition-transform active:scale-90 cursor-pointer shadow-md"
            aria-label={isPlaying ? 'இசையை இடைநிறுத்துக' : 'இசையை இயக்குக'}
            title={isPlaying ? 'இடைநிறுத்து' : 'இயக்கு'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          {/* Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full text-ivory-dim hover:text-gold-300 transition-colors"
            aria-label={isMuted ? 'ஒலியை மீட்டமைக்க' : 'ஒலியை முடக்க'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rosewine-soft" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Touch prompt on mobile if browser blocked initial sound */}
      {audioBlocked && !isPlaying && (
        <div
          onClick={playAudio}
          className="fixed top-3 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-gold-500 text-midnight font-bold font-tamil text-xs shadow-gold-glow animate-bounce cursor-pointer flex items-center gap-2"
        >
          <Music className="w-3.5 h-3.5" />
          <span>பாடலை இயக்க திரையைத் தொடவும் 🎵</span>
        </div>
      )}
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';
