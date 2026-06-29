import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, Instagram, Facebook, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onReserveClick: () => void;
}

export default function Footer({ onNavClick, onReserveClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribed(true);
    setEmail('');

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-brand-emerald text-white pt-20 pb-8 border-t border-brand-gold/20 relative overflow-hidden">
      {/* Subtle mandala background decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 pattern-arabic opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand logo and Newsletter Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-center">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center bg-white/10">
                <span className="text-brand-gold font-serif text-lg font-bold">H</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wider leading-none">
                  HAWA BEIRUT
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-sans">
                  Restaurant & Cafe
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-cream/80 leading-relaxed font-light max-w-sm">
              An elegant Levant haven celebrating generations of authentic Lebanese recipes, wood charcoal grills, fragrant Damascus jasmine gardens, and siphon coffee art.
            </p>
          </div>

          {/* Newsletter Box Column (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base text-brand-gold">
                Join The Beirut Journal
              </h4>
              <p className="text-xs text-brand-cream/75 font-light">
                Receive secret weekend recipes, priority reservations, and early banquet catalog reviews.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-brand-gold/20 border border-brand-gold px-4 py-2 rounded-xl flex items-center space-x-2 text-xs text-brand-gold font-semibold"
                  >
                    <Check size={14} />
                    <span>Subscribed Successfully!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex relative w-full md:w-[320px]">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-3 pr-10 py-2.5 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald rounded-lg transition-all flex items-center justify-center cursor-pointer"
                      aria-label="Submit Newsletter"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Middle Segment: Grid of quicklinks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase">
              Quick Links
            </h5>
            <ul className="space-y-2 text-brand-cream/80 font-light">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Dine-In Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Our Sacred Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Digital Explorer Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('signatures')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Signature Delicacies
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Categories quick filter links */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase">
              Menu Highlights
            </h5>
            <ul className="space-y-2 text-brand-cream/80 font-light">
              <li>
                <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Charcoal Mixed Grill
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Cold & Hot Mezze
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Clay-Oven Flatbreads
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Specialty Rose Coffee
                </button>
              </li>
            </ul>
          </div>

          {/* Booking resources */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase">
              Reservations
            </h5>
            <ul className="space-y-2 text-brand-cream/80 font-light">
              <li>
                <button onClick={onReserveClick} className="hover:text-brand-gold transition-colors cursor-pointer">
                  Book A Courtyard Table
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">
                  Jasmine Terrace Booking
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">
                  Private Corporate Events
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition-colors">
                  Dine-In Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Address / Contact details */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase">
              Ashrafieh Office
            </h5>
            <p className="text-brand-cream/80 leading-relaxed font-light">
              Ashrafieh St, Beirut, Lebanon <br />
              📞 +961 1 234 567 <br />
              ✉️ info@hawabeirut.com
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-white/10 hover:bg-brand-gold hover:text-brand-emerald rounded-full transition-colors cursor-pointer"
                aria-label="Instagram Link"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-white/10 hover:bg-brand-gold hover:text-brand-emerald rounded-full transition-colors cursor-pointer"
                aria-label="Facebook Link"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright Segment */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-brand-cream/60">
          <p>© 2026 Hawa Beirut Restaurant & Cafe. All rights reserved. Crafted with authentic Levantine love.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Dining</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
