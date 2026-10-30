import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Heart } from 'lucide-react';
import { photoGalleryData, galleryCategoryTabs } from '../data/photos';
import { GalleryCategory, PhotoItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? photoGalleryData
    : photoGalleryData.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 relative bg-gradient-to-b from-midnight via-burgundy-950/40 to-midnight">
      
      {/* Decorative Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-burgundy-900/40 text-gold-300 text-xs font-tamil">
          <Camera className="w-3.5 h-3.5 text-gold-400" />
          <span>புகைப்பட நினைவுக் கூடம்</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-tamil-serif text-ivory">
          எங்கள் அழகிய நினைவுகள்
        </h2>

        <p className="text-xs sm:text-sm text-ivory-muted font-tamil max-w-md mx-auto leading-relaxed">
          ஒவ்வொரு புகைப்படமும் சொல்லும் ஒரு காதல் கவிதை; எட்டு ஆண்டுகளில் பதிந்த மறக்க முடியாத தருணங்கள்.
        </p>

        <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent pt-1" />
      </div>

      {/* Category Tabs Filter - Thumb friendly scroll on mobile */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 px-1 no-scrollbar">
          {galleryCategoryTabs.map((tab) => {
            const isSelected = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key as GalleryCategory)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-tamil font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-midnight shadow-gold-glow font-bold scale-105'
                    : 'bg-midnight-card/90 text-ivory-muted hover:text-gold-200 border border-gold-500/20'
                }`}
              >
                {tab.labelTa}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile-First Responsive Photo Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-midnight-card border border-gold-500/30 hover:border-gold-400 shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setActivePhoto(photo)}
              >
                {/* Photo Frame: Preserves full face visibility with object-contain & object-top */}
                <div className="relative aspect-[4/5] bg-black/90 flex items-center justify-center overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.titleTa}
                    loading="lazy"
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-midnight/85 border border-gold-500/40 text-gold-300 text-[11px] font-tamil backdrop-blur-md">
                    {photo.categoryLabelTa}
                  </div>

                  {/* Tap icon indicator */}
                  <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-midnight/80 border border-gold-400/40 text-gold-300">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Information Footer */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-midnight-card to-burgundy-950/80 border-t border-gold-500/20">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-tamil-serif text-ivory">
                      {photo.titleTa}
                    </h3>
                    <p className="text-xs text-ivory-muted font-tamil mt-1.5 leading-relaxed">
                      {photo.descriptionTa}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gold-500/15 flex items-center justify-between text-[11px] text-gold-400 font-tamil">
                    <span>முழுமையாகக் காண தொடுக</span>
                    <Heart className="w-3.5 h-3.5 text-rosewine-soft fill-rosewine-soft/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        photos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(newPhoto) => setActivePhoto(newPhoto)}
      />
    </section>
  );
};
