import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PhotoItem } from '../types';

interface LightboxModalProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onNavigate: (newPhoto: PhotoItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [photo]);

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onNavigate(photos[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onNavigate(photos[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const total = photos.length;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 backdrop-blur-xl p-3 sm:p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-midnight-card/80 border border-gold-500/30 text-ivory hover:text-gold-300 hover:border-gold-500 transition-colors"
          aria-label="மூடவும் (Close)"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 px-3.5 py-1.5 rounded-full bg-midnight-card/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-tamil">
          {currentIndex + 1} / {total}
        </div>

        {/* Navigation Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-midnight-card/80 border border-gold-500/30 text-ivory hover:text-gold-300 hover:border-gold-500 transition-colors shadow-cinematic"
          aria-label="முந்தைய புகைப்படம் (Previous)"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Navigation Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-midnight-card/80 border border-gold-500/30 text-ivory hover:text-gold-300 hover:border-gold-500 transition-colors shadow-cinematic"
          aria-label="அடுத்த புகைப்படம் (Next)"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Modal Content Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center w-full"
        >
          {/* Main Photo Frame */}
          <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden rounded-xl border border-gold-500/30 shadow-2xl bg-black/95">
            {imageError ? (
              <div className="w-80 h-72 flex flex-col items-center justify-center text-center p-6 text-ivory-dim">
                <ImageIcon className="w-12 h-12 text-burgundy-600 mb-2" />
                <p className="font-tamil text-xs">புகைப்படம் கிடைக்கவில்லை</p>
                <p className="font-tamil text-[11px] text-gold-400 mt-1">{photo.titleTa}</p>
              </div>
            ) : (
              <img
                src={photo.src}
                alt={photo.titleTa}
                className="max-h-[68vh] sm:max-h-[75vh] w-auto max-w-full object-contain object-center rounded-lg select-none"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          {/* Tamil Caption Box Below */}
          <div className="w-full max-w-2xl mt-4 px-4 py-3 rounded-xl bg-midnight-card/90 border border-gold-500/20 text-center">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-tamil bg-burgundy-900/60 border border-gold-500/30 text-gold-300 mb-1">
              {photo.categoryLabelTa}
            </div>
            <h3 className="text-base sm:text-lg font-bold font-tamil-serif text-ivory">
              {photo.titleTa}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-muted font-tamil mt-1 leading-relaxed">
              {photo.descriptionTa}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
