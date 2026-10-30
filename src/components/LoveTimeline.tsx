import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Baby, Home, Calendar, Eye } from 'lucide-react';
import { timelineMilestones } from '../data/timeline';
import { LightboxModal } from './LightboxModal';
import { PhotoItem } from '../types';

export const LoveTimeline: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-gold-400" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-rosewine-soft" />;
      case 'Home':
        return <Home className="w-5 h-5 text-gold-300" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  const timelinePhotos: PhotoItem[] = timelineMilestones
    .filter((m) => !!m.photoSrc)
    .map((m) => ({
      id: m.id,
      src: m.photoSrc!,
      titleTa: m.titleTa,
      descriptionTa: m.descriptionTa,
      category: 'memories',
      categoryLabelTa: m.yearTa
    }));

  return (
    <section id="timeline" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 relative bg-midnight overflow-hidden">
      
      {/* Decorative glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-burgundy-900/40 text-gold-300 text-xs font-tamil">
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>அன்பின் பயணம்</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-tamil-serif text-ivory">
          எங்கள் காதல் கதை காலவரிசை
        </h2>

        <p className="text-xs sm:text-sm text-ivory-muted font-tamil max-w-md mx-auto leading-relaxed">
          திருமண பந்தத்தில் இணைந்து எட்டு ஆண்டுகளை இனிதே நிறைவு செய்துள்ள எங்கள் வாழ்க்கைப் பயணம்.
        </p>

        <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent pt-1" />
      </div>

      {/* Vertical Animated Timeline */}
      <div className="max-w-2xl sm:max-w-5xl mx-auto relative z-10">
        
        {/* Central Vertical Line on mobile & desktop */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-500/20 via-gold-400/50 to-gold-500/20 sm:-translate-x-1/2" />

        <div className="space-y-8 sm:space-y-12">
          {timelineMilestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight-card border-2 border-gold-400 shadow-gold-glow z-20">
                  {getIcon(item.iconName)}
                </div>

                {/* Content Card */}
                <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-6 w-[calc(100%-2.5rem)] sm:w-1/2">
                  <div className="p-4 sm:p-6 rounded-2xl bg-midnight-card/95 border border-gold-500/30 shadow-lg hover:shadow-gold-glow transition-all duration-300">
                    
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-burgundy-900/70 border border-gold-500/30 text-gold-300 text-[11px] sm:text-xs font-tamil mb-2.5">
                      <span>{item.yearTa}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-tamil-serif text-ivory leading-snug">
                      {item.titleTa}
                    </h3>

                    <p className="text-xs text-gold-400 font-tamil mt-1 font-medium">
                      {item.subtitleTa}
                    </p>

                    <p className="text-xs sm:text-sm text-ivory-muted font-tamil mt-2.5 leading-relaxed">
                      {item.descriptionTa}
                    </p>

                    {/* Associated Photo: Fully Visible, No Faces Cropped! */}
                    {item.photoSrc && (
                      <div
                        onClick={() =>
                          setSelectedPhoto({
                            id: item.id,
                            src: item.photoSrc!,
                            titleTa: item.titleTa,
                            descriptionTa: item.descriptionTa,
                            category: 'memories',
                            categoryLabelTa: item.yearTa
                          })
                        }
                        className="mt-3.5 rounded-xl overflow-hidden border border-gold-500/30 bg-black/80 cursor-pointer group relative shadow-md"
                      >
                        <img
                          src={item.photoSrc}
                          alt={item.titleTa}
                          className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain object-top mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        {/* Tap to view full label */}
                        <div className="py-1 px-3 bg-midnight/90 border-t border-gold-500/20 flex items-center justify-between text-[11px] text-gold-300 font-tamil">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" /> முழுமையாகக் காண தொடுக
                          </span>
                          <span className="text-rosewine-soft">❤️</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox for timeline photos */}
      <LightboxModal
        photo={selectedPhoto}
        photos={timelinePhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(newPhoto) => setSelectedPhoto(newPhoto)}
      />

    </section>
  );
};
