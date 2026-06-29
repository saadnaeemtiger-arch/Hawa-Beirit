import { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, ShoppingBag, Sparkles } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Custom Toast notification states for added items
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Scroll to Top visibility state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Monitor scrolling to set active menu highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'menu',
        'signatures',
        'why-us',
        'gallery',
        'reservations',
        'testimonials',
        'contact'
      ];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Scroll to Top visibility trigger
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Load cart items from localStorage on mount (optional persistent order summary)
  useEffect(() => {
    const saved = localStorage.getItem('hawa_beirut_cart');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const saveCartToLocal = (items: CartItem[]) => {
    localStorage.setItem('hawa_beirut_cart', JSON.stringify(items));
    setCartItems(items);
  };

  // 3. Cart State Methods
  const handleAddToCart = (item: MenuItem) => {
    const existing = cartItems.find((ci) => ci.menuItem.id === item.id);
    let updated: CartItem[] = [];

    if (existing) {
      updated = cartItems.map((ci) =>
        ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
      );
    } else {
      updated = [...cartItems, { menuItem: item, quantity: 1 }];
    }

    saveCartToLocal(updated);

    // Fire custom premium toast
    setToastMsg(`"${item.name}" added to your digital order!`);
    setShowToast(true);
  };

  // Clear toast on timeout
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleUpdateQuantity = (itemId: string, qty: number) => {
    const updated = cartItems.map((ci) =>
      ci.menuItem.id === itemId ? { ...ci, quantity: qty } : ci
    );
    saveCartToLocal(updated);
  };

  const handleRemoveItem = (itemId: string) => {
    const updated = cartItems.filter((ci) => ci.menuItem.id !== itemId);
    saveCartToLocal(updated);
  };

  const handleClearCart = () => {
    saveCartToLocal([]);
  };

  // 4. Navigation Helpers
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Floating Sticky Navigation Bar */}
      <Navbar
        onNavClick={scrollToSection}
        activeSection={activeSection}
        cartCount={cartCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onReserveClick={() => scrollToSection('reservations')}
      />

      {/* 2. Page Content Sections */}
      <main>
        {/* Hero */}
        <Hero
          onViewMenuClick={() => scrollToSection('menu')}
          onReserveClick={() => scrollToSection('reservations')}
        />

        {/* About Section */}
        <About />

        {/* Dynamic Category cards and Full Explorer Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* Signature Dishes Spotlight list */}
        <SignatureDishes onAddToCart={handleAddToCart} />

        {/* 8 Premium Highlights of Lebanese Hospitality */}
        <WhyChooseUs />

        {/* Photo Gallery & Lightbox viewer */}
        <GallerySection />

        {/* Reservation Engine Form & Local Booking summary */}
        <ReservationSection />

        {/* Guest Testimonial reviews grid */}
        <TestimonialsSection />

        {/* Interactive FAQ list */}
        <FaqSection />

        {/* Maps Mockup & Contact form */}
        <ContactSection />
      </main>

      {/* 3. Footer Segment */}
      <Footer
        onNavClick={scrollToSection}
        onReserveClick={() => scrollToSection('reservations')}
      />

      {/* 4. Sliding Interactive Checkout Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 5. Custom Premium Toast Indicator */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-brand-emerald text-white border border-brand-gold/40 px-5 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 max-w-sm cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="p-2 bg-brand-gold/20 rounded-xl text-brand-gold shrink-0">
              <ShoppingBag size={18} />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-brand-cream font-medium leading-tight">
                {toastMsg}
              </p>
              <button className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block text-left">
                View Order Summary &rarr;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Persistent Floating WhatsApp Button (visible on every page) */}
      <motion.a
        href="https://wa.me/961123456"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/35 transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Chat with Hawa Beirut on WhatsApp"
      >
        <MessageSquare size={24} fill="currentColor" />
        
        {/* Floating tooltip label */}
        <span className="absolute right-14 bg-white text-brand-charcoal border border-brand-gold/20 shadow-xl rounded-lg py-1 px-3 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          💬 WhatsApp Chat
        </span>
      </motion.a>

      {/* 7. Scroll to Top Indicator Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 p-3 bg-brand-gold hover:bg-brand-emerald text-brand-emerald hover:text-white rounded-full border border-brand-gold/45 shadow-xl transition-all duration-300 transform active:scale-95 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
