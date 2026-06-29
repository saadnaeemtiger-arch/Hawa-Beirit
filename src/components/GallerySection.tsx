import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Available categories
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Gastronomy' },
    { id: 'interior', label: 'Ambience' },
    { id: 'cafe', label: 'Coffee & Café' },
    { id: 'events', label: 'Private Events' }
  ];

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });

  const openLightbox = (id: string) => {
    // find index in the filtered items
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-brand-lightcream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-emerald uppercase font-mono block animate-pulse"
          >
            Visual Chronicles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            Our Gallery & <span className="italic font-serif text-brand-walnut">Scenic Ambience</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <p className="max-w-xl mx-auto text-sm text-brand-charcoal/70">
            Witness our master craft, gorgeous outdoor seating, floral jasmine terraces, and freshly roasted single-origin Arabic cups.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-brand-emerald text-white border-brand-emerald shadow-md'
                  : 'bg-white text-brand-charcoal border-brand-gold/20 hover:border-brand-emerald hover:text-brand-emerald'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (with hover zoom effect and viewing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item.id)}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-brand-gold/15"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                {/* Interactive floating elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none">
                  <span className="p-3 bg-brand-gold/90 text-brand-emerald rounded-full shadow-lg">
                    <Eye size={20} />
                  </span>
                </div>

                {/* Caption content info */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-base leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram Feed Section */}
        <div className="mt-20 border-t border-brand-gold/20 pt-16 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-brand-walnut">
            <Camera size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Instagram Feed • @HawaBeirut</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-emerald">
            Follow Our Mediterranean Journey
          </h3>
          <p className="max-w-md mx-auto text-xs text-brand-charcoal/60">
            Share your beautiful Hawa Beirut moments using <span className="font-semibold text-brand-emerald">#HawaBeirut</span> to be featured in our weekly dine-in catalogs.
          </p>
          <div className="flex justify-center pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-brand-cream border border-brand-gold/40 hover:bg-brand-emerald hover:text-white rounded-full text-xs font-semibold tracking-wider uppercase text-brand-emerald transition-all cursor-pointer"
            >
              Browse Instagram
            </a>
          </div>
        </div>

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Top row controls */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center space-x-4 z-50">
                <span className="text-white/60 text-xs font-mono">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Central carousel view */}
              <div className="relative w-full max-w-5xl h-[60vh] md:h-[75vh] flex items-center justify-center">
                {/* Previous button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-40 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Active Photo Container */}
                <motion.div
                  key={activeLightboxItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                >
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Next button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-40 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Under-caption text */}
              <div className="text-center max-w-xl space-y-2 mt-6 z-10 px-4">
                <span className="text-brand-gold text-xs uppercase font-mono tracking-widest block font-bold">
                  {activeLightboxItem.category}
                </span>
                <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                  {activeLightboxItem.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
