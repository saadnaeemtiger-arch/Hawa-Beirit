import { motion } from 'motion/react';
import { ChevronDown, Calendar, Menu as MenuIcon, Compass, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onViewMenuClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onViewMenuClick, onReserveClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Background Hero Image with Dark Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Lebanese Feast"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-emerald/40 to-black/60 z-10" />
        {/* Arabic Grid Pattern */}
        <div className="absolute inset-0 pattern-arabic opacity-[0.25] z-10" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
        {/* Floater 1: Mandala badge */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-24 left-[10%] w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-emerald/20 backdrop-blur-md"
        >
          <Compass className="text-brand-gold opacity-60" size={32} />
        </motion.div>

        {/* Floater 2: Sparkle Badge */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute bottom-32 left-[15%] w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center bg-brand-cream/5 backdrop-blur-sm"
        >
          <Sparkles className="text-brand-gold opacity-50" size={24} />
        </motion.div>

        {/* Floater 3: Award Badge */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/3 right-[12%] w-24 h-24 rounded-full border border-brand-gold/25 flex items-center justify-center bg-brand-emerald/15 backdrop-blur-md"
        >
          <Award className="text-brand-gold opacity-45" size={40} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
        {/* Tiny tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/40 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
            EST. 2012 • ASHRAFIEH, BEIRUT
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Experience the Authentic <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold font-serif italic">
            Taste of Beirut
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-brand-cream/90 leading-relaxed mb-10 font-light"
        >
          Enjoy handcrafted Lebanese cuisine, freshly brewed coffee, delicious desserts, and unforgettable dining in a warm and elegant atmosphere. Welcome to Hawa Beirut\'s premium culinary sanctuary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* View Menu */}
          <button
            onClick={onViewMenuClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/35 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <MenuIcon size={16} />
            <span>Explore Menu</span>
          </button>

          {/* Reserve Table */}
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-brand-gold hover:text-brand-gold font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Calendar size={16} />
            <span>Book A Table</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs tracking-widest text-brand-cream uppercase"
        >
          <div className="flex items-center space-x-2">
            <span className="text-brand-gold">★</span>
            <span>Google Reviews 4.9/5</span>
          </div>
          <div className="hidden sm:block text-brand-gold/40">•</div>
          <div>100% Halal Certified</div>
          <div className="hidden sm:block text-brand-gold/40">•</div>
          <div>Ashrafieh Courtyard Dining</div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] tracking-widest uppercase text-brand-cream/60 mb-2 font-mono"
        >
          Scroll to explore
        </motion.span>
        <motion.button
          onClick={onViewMenuClick}
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="p-1.5 rounded-full bg-brand-emerald/40 border border-brand-gold/30 text-brand-gold hover:bg-brand-emerald/80 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll Down"
        >
          <ChevronDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
