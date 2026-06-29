import { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Sparkles, Plus, Check, RotateCcw } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: { menuItem: MenuItem; quantity: number }[];
}

export default function MenuSection({ onAddToCart, cartItems }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  // Find out if item is already in cart to display custom indicator
  const getCartQuantity = (itemId: string) => {
    const item = cartItems.find((ci) => ci.menuItem.id === itemId);
    return item ? item.quantity : 0;
  };

  // Filter Menu Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDietary = dietaryFilter === 'all' || item.dietary.includes(dietaryFilter as any);
      return matchCategory && matchSearch && matchDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll down to the actual explorer grid
    const target = document.getElementById('menu-explorer');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setDietaryFilter('all');
  };

  return (
    <section id="menu" className="py-24 bg-brand-lightcream relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/4 left-0 w-80 h-80 pattern-arabic opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 pattern-arabic opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-emerald uppercase font-mono block animate-pulse"
          >
            Digital Food Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            Browse Our <span className="italic font-serif text-brand-walnut">Delectable Menu</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <p className="max-w-2xl mx-auto text-sm text-brand-charcoal/80">
            Select a category card to narrow down your cravings, or use the search controls to find exactly what you desire.
          </p>
        </div>

        {/* 1. Interactive Featured Category Cards (Requested layout) */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-bold text-brand-emerald mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start space-x-2">
            <Sparkles className="text-brand-gold" size={20} />
            <span>Featured Categories</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleCategorySelect(category.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md border hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  selectedCategory === category.id
                    ? 'border-brand-gold ring-2 ring-brand-gold/40'
                    : 'border-brand-gold/10'
                }`}
              >
                {/* Visual Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent z-10" />
                  <span className="absolute bottom-3 left-4 text-white font-serif font-bold text-lg tracking-wide">
                    {category.name}
                  </span>
                </div>

                {/* Desc & view button */}
                <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light line-clamp-2">
                    {category.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategorySelect(category.id);
                    }}
                    className="w-full text-center text-xs font-semibold uppercase tracking-wider text-brand-emerald hover:text-brand-gold group-hover:underline transition-colors duration-300"
                  >
                    View Menu &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Actual Menu Explorer Header & Control Filters */}
        <div id="menu-explorer" className="pt-8 border-t border-brand-gold/20 scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-gold/15 mb-12 space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-emerald">
                  Menu Explorer
                </h3>
                <p className="text-xs text-brand-charcoal/60">
                  Showing {filteredItems.length} delicacies in category <span className="font-semibold text-brand-emerald uppercase">{selectedCategory}</span>
                </p>
              </div>

              {/* Clear button */}
              {(selectedCategory !== 'all' || searchQuery !== '' || dietaryFilter !== 'all') && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-1 self-start md:self-auto text-xs font-semibold text-brand-walnut hover:text-brand-emerald hover:underline transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Inputs & Buttons row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              {/* Search input (6 columns) */}
              <div className="lg:col-span-5 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-charcoal/40" size={18} />
                <input
                  type="text"
                  placeholder="Search dishes (e.g. Hummus, Kebab, Latte...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-gold/20 focus:outline-none focus:ring-2 focus:ring-brand-emerald/30 focus:border-brand-emerald bg-brand-cream/10 text-brand-charcoal text-sm"
                />
              </div>

              {/* Category Quick Selector Dropdown / Row (4 columns) */}
              <div className="lg:col-span-4 relative flex items-center space-x-2">
                <span className="text-xs text-brand-charcoal/60 shrink-0 font-medium hidden sm:inline">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-3 rounded-xl border border-brand-gold/20 focus:outline-none focus:ring-2 focus:ring-brand-emerald/30 focus:border-brand-emerald bg-brand-cream/10 text-brand-charcoal text-sm"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dietary Filter (3 columns) */}
              <div className="lg:col-span-3 relative flex items-center space-x-2">
                <Filter className="text-brand-charcoal/40" size={16} />
                <select
                  value={dietaryFilter}
                  onChange={(e) => setDietaryFilter(e.target.value)}
                  className="w-full py-3 px-3 rounded-xl border border-brand-gold/20 focus:outline-none focus:ring-2 focus:ring-brand-emerald/30 focus:border-brand-emerald bg-brand-cream/10 text-brand-charcoal text-sm"
                >
                  <option value="all">All Dietary Preferences</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="spicy">Spicy</option>
                </select>
              </div>

            </div>
          </div>

          {/* 3. Filtered Grid display */}
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item) => {
                  const qty = getCartQuantity(item.id);
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Thumbnail photo */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Display badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md text-white shadow-sm ${
                                tag === 'vegetarian' ? 'bg-green-600' :
                                tag === 'vegan' ? 'bg-teal-600' :
                                tag === 'gluten-free' ? 'bg-amber-600' : 'bg-red-600'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Signature overlay */}
                        {item.isSignature && (
                          <span className="absolute bottom-3 right-3 bg-brand-gold text-brand-emerald font-serif italic font-bold text-[10px] px-2 py-1 rounded-md shadow">
                            👑 Signature
                          </span>
                        )}
                      </div>

                      {/* Item content info */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-start justify-between">
                            <h4 className="font-serif font-bold text-base text-brand-emerald">
                              {item.name}
                            </h4>
                            <span className="text-base font-bold text-brand-walnut shrink-0 pl-2">
                              ${item.price}
                            </span>
                          </div>
                          <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>

                        {/* Order button */}
                        <div className="pt-3 border-t border-brand-gold/10 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-brand-charcoal/50">
                            Prep: {item.prepTime || '10-15 mins'}
                          </span>

                          <button
                            onClick={() => onAddToCart(item)}
                            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                              qty > 0
                                ? 'bg-brand-emerald text-white hover:bg-brand-darkgreen'
                                : 'bg-brand-cream hover:bg-brand-gold/20 text-brand-emerald border border-brand-emerald/10'
                            }`}
                          >
                            {qty > 0 ? (
                              <>
                                <Check size={12} className="text-brand-gold" />
                                <span>Added ({qty})</span>
                              </>
                            ) : (
                              <>
                                <Plus size={12} />
                                <span>Add to Order</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-3xl border border-brand-gold/15 p-8"
              >
                <p className="text-brand-charcoal/60 text-lg font-light mb-4">
                  No delicacies match your active filter combinations.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-brand-emerald text-white rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-brand-darkgreen transition-all"
                >
                  Clear Active Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
