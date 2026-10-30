import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { siteConfig } from '../data/config';

interface NavigationProps {
  onRevisitIntro?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onRevisitIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', labelTa: 'முகப்பு' },
    { href: '#gallery', labelTa: 'புகைப்படங்கள்' },
    { href: '#timeline', labelTa: 'காலவரிசை' },
    { href: '#family', labelTa: 'குடும்பம்' },
    { href: '#letter', labelTa: 'காதல் மடல்' },
    { href: '#ending', labelTa: 'வாழ்த்துகள்' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-cinematic'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Couple Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-tamil-serif font-bold text-lg sm:text-xl text-ivory tracking-wide group-hover:text-gold-300 transition-colors">
            {siteConfig.names.brideTa}
          </span>
          <Heart className="w-4 h-4 text-rosewine-soft fill-rosewine-soft animate-pulse" />
          <span className="font-tamil-serif font-bold text-lg sm:text-xl text-ivory tracking-wide group-hover:text-gold-300 transition-colors">
            {siteConfig.names.groomTa}
          </span>
          <span className="ml-2 text-xs font-tamil px-2 py-0.5 rounded-full bg-burgundy-900/60 border border-gold-500/30 text-gold-300 hidden sm:inline-block">
            8 ஆண்டுகள்
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium font-tamil text-ivory-muted hover:text-gold-300 transition-colors tracking-wide py-1 border-b border-transparent hover:border-gold-400"
            >
              {link.labelTa}
            </a>
          ))}

          {onRevisitIntro && (
            <button
              onClick={onRevisitIntro}
              className="text-xs font-tamil px-3 py-1.5 rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-500/10 transition-colors"
              title="அறிமுகக் காட்சியை மீண்டும் காண்க"
            >
              அறிமுகம்
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory hover:text-gold-300 transition-colors rounded-lg bg-burgundy-950/60 border border-gold-500/20"
            aria-label="பட்டியல்"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight-card/95 border-b border-gold-500/20 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-tamil font-medium text-ivory-soft hover:text-gold-300 transition-colors py-2 border-b border-gold-500/10"
            >
              {link.labelTa}
            </a>
          ))}
          {onRevisitIntro && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRevisitIntro();
              }}
              className="w-full text-center text-sm font-tamil py-2.5 rounded-lg border border-gold-500/40 text-gold-300 bg-burgundy-900/40"
            >
              அறிமுகக் காட்சியை மீண்டும் காண்க
            </button>
          )}
        </div>
      )}
    </header>
  );
};
