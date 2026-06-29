import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, PhoneCall, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  cartCount: number;
  onCartToggle: () => void;
  onReserveClick: () => void;
}

export default function Navbar({
  onNavClick,
  activeSection,
  cartCount,
  onCartToggle,
  onReserveClick
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'signatures', label: 'Signatures' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-emerald/95 text-white shadow-xl py-3 border-b border-brand-gold/20 backdrop-blur-md'
            : 'bg-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleItemClick('home')}
              className="flex items-center space-x-2 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center bg-brand-cream/10 group-hover:bg-brand-cream/20 transition-all duration-300">
                <span className="text-brand-gold font-serif text-xl font-bold">H</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wider leading-none group-hover:text-brand-gold transition-colors duration-300">
                  HAWA BEIRUT
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-sans">
                  Restaurant & Cafe
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-sm font-medium tracking-wide uppercase cursor-pointer transition-all duration-300 hover:text-brand-gold relative py-1 ${
                    activeSection === item.id ? 'text-brand-gold' : 'text-white/90'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Utility buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* WhatsApp / Phone trigger */}
              <a
                href="https://wa.me/961123456"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center space-x-1 text-xs text-brand-cream hover:text-brand-gold transition-colors duration-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
              >
                <PhoneCall size={14} className="text-brand-gold" />
                <span>+961 1 234 567</span>
              </a>

              {/* Shopping Cart Button */}
              <button
                onClick={onCartToggle}
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 text-white cursor-pointer group"
                aria-label="Toggle Shopping Cart"
              >
                <ShoppingBag size={22} className="group-hover:text-brand-gold transition-colors duration-300" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-brand-gold text-brand-emerald text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-emerald shadow-lg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Reserve Button */}
              <button
                onClick={onReserveClick}
                className="hidden sm:flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-semibold uppercase tracking-wider text-xs px-4 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-gold/20 cursor-pointer"
              >
                <Calendar size={14} />
                <span>Book Table</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300 text-white cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-brand-emerald/98 z-40 overflow-y-auto border-t border-brand-gold/10 px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-[10px] tracking-widest text-brand-gold uppercase font-bold mb-2">
                Navigation Menu
              </p>
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left text-2xl font-serif py-2 cursor-pointer transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-brand-gold font-bold'
                      : 'text-white hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onReserveClick();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-brand-gold text-brand-emerald py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/20"
              >
                <Calendar size={16} />
                <span>Reserve A Table Now</span>
              </button>

              <div className="text-center text-xs text-brand-cream/70 space-y-1">
                <p>📍 Ashrafieh Street, Beirut, Lebanon</p>
                <p>📞 +961 1 234 567 | ✉️ info@hawabeirut.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
