import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { motion } from 'motion/react';
import { Star, Clock, Flame, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface SignatureDishesProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function SignatureDishes({ onAddToCart }: SignatureDishesProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const signatures = MENU_ITEMS.filter((item) => item.isSignature);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section id="signatures" className="py-24 bg-brand-charcoal relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-arabic opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-emerald/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and subtitle */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-gold uppercase font-mono block"
          >
            Handcrafted Masterpieces
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Our Culinary <span className="italic font-serif text-brand-gold">Signature Dishes</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-sm text-brand-cream/75"
          >
            Every dish is an masterclass in flavor, crafted with ingredients sourced directly from Beirut cooperatives and grilled over authentic cedar and charcoal.
          </motion.p>
        </div>

        {/* Dynamic Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((dish, idx) => {
            const isFav = favorites.includes(dish.id);
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-brand-gold/40 transition-all duration-500 shadow-2xl"
              >
                {/* Image and badges */}
                <div className="relative h-64 overflow-hidden">
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60" />
                  
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-row badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="flex items-center space-x-1 bg-brand-emerald/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-gold/30 shadow-lg">
                      <Flame size={10} className="text-brand-gold" />
                      <span>Signature</span>
                    </span>

                    {/* Like button */}
                    <button
                      onClick={() => toggleFavorite(dish.id)}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white hover:text-red-500 transition-all duration-300 cursor-pointer"
                      aria-label="Favorite Dish"
                    >
                      <Heart size={14} fill={isFav ? 'currentColor' : 'none'} className={isFav ? 'text-red-500' : ''} />
                    </button>
                  </div>

                  {/* Bottom-row overlay with prep time & rating */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 text-xs">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-brand-gold font-medium">
                      <Star size={12} fill="currentColor" />
                      <span>{dish.rating || '4.9'}</span>
                      <span className="text-white/60 text-[10px]">({dish.reviewsCount || '150'}+)</span>
                    </div>

                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-brand-cream font-medium">
                      <Clock size={12} />
                      <span>{dish.prepTime}</span>
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <div className="text-lg font-bold font-serif text-brand-gold shrink-0">
                        ${dish.price}
                      </div>
                    </div>
                    <p className="text-xs text-brand-cream/70 leading-relaxed font-light line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                    <button
                      onClick={() => onAddToCart(dish)}
                      className="flex-grow flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-semibold uppercase tracking-wider text-xs py-3 rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer hover:shadow-lg hover:shadow-brand-gold/15"
                    >
                      <ShoppingCart size={14} />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
