import { MenuItem, CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle, ChevronRight, DollarSign, Sparkles } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, qty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [orderId, setOrderId] = useState('');

  // Computations
  const subtotal = cartItems.reduce((acc, ci) => acc + ci.menuItem.price * ci.quantity, 0);
  const vatRate = 0.11; // Standard 11% Lebanon VAT
  const vat = Math.round(subtotal * vatRate * 100) / 100;
  const deliveryFee = subtotal > 50 ? 0 : 5; // Free delivery for orders over $50
  const total = subtotal + vat + (subtotal > 0 ? deliveryFee : 0);

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkoutName.trim() || !checkoutPhone.trim()) return;

    // Simulate placing order
    const randomId = `OD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
    setCheckoutStep('success');
  };

  const handleCloseSuccess = () => {
    onClearCart();
    setCheckoutStep('cart');
    setCheckoutName('');
    setCheckoutPhone('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={checkoutStep === 'success' ? handleCloseSuccess : onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-brand-lightcream z-50 shadow-2xl flex flex-col justify-between border-l border-brand-gold/25"
          >
            
            {/* Header segment */}
            <div className="p-6 bg-brand-emerald text-white border-b border-brand-gold/25 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-brand-gold/15 border border-brand-gold/30 rounded-xl">
                  <ShoppingBag size={18} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base">Your Digital Order</h3>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-mono">
                    {cartItems.length} items added
                  </span>
                </div>
              </div>

              <button
                onClick={checkoutStep === 'success' ? handleCloseSuccess : onClose}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white"
                aria-label="Close Cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              <AnimatePresence mode="wait">
                
                {/* 1. Empty State */}
                {cartItems.length === 0 && checkoutStep !== 'success' && (
                  <motion.div
                    key="empty-cart"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-cream border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                      <ShoppingBag size={36} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-brand-emerald">
                        Your Order is Empty
                      </h4>
                      <p className="text-xs text-brand-charcoal/60 max-w-xs mt-1 leading-relaxed">
                        Add delicacies from our signature list or explore the digital food categories to begin assembling your Lebanese feast.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-brand-emerald text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-brand-darkgreen transition-all cursor-pointer shadow"
                    >
                      Browse Digital Menu
                    </button>
                  </motion.div>
                )}

                {/* 2. Items List View */}
                {cartItems.length > 0 && checkoutStep === 'cart' && (
                  <motion.div
                    key="cart-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-brand-gold/10 pb-2">
                      <span className="text-xs font-semibold text-brand-emerald uppercase font-mono">Review Items</span>
                      <button
                        onClick={onClearCart}
                        className="text-[10px] text-brand-walnut font-bold uppercase hover:underline cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>

                    <div className="space-y-3">
                      {cartItems.map((ci) => (
                        <div
                          key={ci.menuItem.id}
                          className="bg-white p-4 rounded-xl border border-brand-gold/10 shadow-sm flex items-center justify-between gap-4"
                        >
                          <img
                            src={ci.menuItem.image}
                            alt={ci.menuItem.name}
                            className="w-14 h-14 rounded-lg object-cover border border-brand-gold/15 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-grow space-y-1 min-w-0">
                            <h4 className="font-serif font-bold text-xs sm:text-sm text-brand-emerald truncate">
                              {ci.menuItem.name}
                            </h4>
                            <div className="text-xs text-brand-walnut font-semibold">
                              ${ci.menuItem.price} <span className="text-brand-charcoal/45 font-light">each</span>
                            </div>
                          </div>

                          {/* Controls Row */}
                          <div className="flex items-center space-x-2 shrink-0">
                            <div className="flex items-center bg-brand-cream border border-brand-gold/20 rounded-lg p-1 space-x-2.5">
                              <button
                                onClick={() => onUpdateQuantity(ci.menuItem.id, Math.max(1, ci.quantity - 1))}
                                className="p-1 rounded-md text-brand-emerald hover:bg-white transition-colors cursor-pointer"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="text-xs font-bold text-brand-emerald font-mono w-4 text-center">
                                {ci.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(ci.menuItem.id, ci.quantity + 1)}
                                className="p-1 rounded-md text-brand-emerald hover:bg-white transition-colors cursor-pointer"
                              >
                                <Plus size={10} />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(ci.menuItem.id)}
                              className="p-2 rounded-lg bg-red-100/50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer"
                              title="Delete Item"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. Details Confirmation Input */}
                {cartItems.length > 0 && checkoutStep === 'details' && (
                  <motion.div
                    key="details-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-brand-gold/10 pb-2">
                      <span className="text-xs font-semibold text-brand-emerald uppercase font-mono">Checkout Details</span>
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-brand-charcoal/70 uppercase tracking-wider font-semibold">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Salim Maalouf"
                          value={checkoutName}
                          onChange={(e) => setCheckoutName(e.target.value)}
                          className="w-full px-4 py-3 bg-white text-brand-charcoal rounded-xl border border-brand-gold/20 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-brand-charcoal/70 uppercase tracking-wider font-semibold">Mobile Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +961 3 123 456"
                          value={checkoutPhone}
                          onChange={(e) => setCheckoutPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-white text-brand-charcoal rounded-xl border border-brand-gold/20 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                        />
                      </div>

                      <div className="p-4 bg-brand-emerald/5 border border-brand-emerald/15 rounded-xl text-brand-charcoal/80 space-y-2 leading-relaxed">
                        <p className="font-semibold text-brand-emerald">Simulated Order Payment</p>
                        <p className="font-light">
                          Hawa Beirut provides premium Cash on Delivery (COD) or instant in-store pickup. No credit card is required to submit this online reservation inquiry.
                        </p>
                      </div>

                      <div className="pt-4 flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep('cart')}
                          className="px-4 py-3 rounded-xl border border-brand-gold/30 hover:bg-brand-cream/20 text-brand-emerald font-semibold uppercase tracking-wider cursor-pointer text-center"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-grow py-3 bg-brand-emerald hover:bg-brand-darkgreen text-white font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 text-center cursor-pointer shadow-md"
                        >
                          Submit Order Detail
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* 4. Checkout Success Confirmation screen */}
                {checkoutStep === 'success' && (
                  <motion.div
                    key="checkout-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center p-6 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-emerald flex items-center justify-center text-brand-gold shadow-lg">
                      <CheckCircle size={32} />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] tracking-widest font-mono text-brand-gold bg-brand-emerald px-3 py-1 rounded-full font-bold uppercase">
                        {orderId}
                      </span>
                      <h4 className="font-serif font-bold text-xl text-brand-emerald">
                        Order Successfully Placed!
                      </h4>
                      <p className="text-xs text-brand-charcoal/70 max-w-xs mt-1 leading-relaxed">
                        Ahla w Sahla, {checkoutName}! Your gourmet order has been successfully queued in our kitchen. One of our Ashrafieh service assistants will contact your phone ({checkoutPhone}) to verify any specific dipping choices.
                      </p>
                    </div>

                    <div className="w-full bg-white p-4 rounded-2xl border border-brand-gold/15 text-left text-xs space-y-1 max-w-xs">
                      <div className="font-semibold text-brand-emerald mb-1">Receipt details:</div>
                      <div className="flex justify-between">
                        <span className="text-brand-charcoal/60">Subtotal:</span>
                        <span className="font-medium font-mono">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-charcoal/60">Taxes (11% VAT):</span>
                        <span className="font-medium font-mono">${vat}</span>
                      </div>
                      <div className="flex justify-between border-t border-brand-gold/10 pt-1.5 mt-1.5 font-bold">
                        <span className="text-brand-emerald">Total Due:</span>
                        <span className="text-brand-emerald font-serif text-sm font-bold">${total}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCloseSuccess}
                      className="w-full max-w-xs py-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 shadow cursor-pointer"
                    >
                      Done & Clear Basket
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Sticky bottom calculations (Only show if on checkout step of cart list) */}
            {cartItems.length > 0 && checkoutStep !== 'success' && (
              <div className="p-6 bg-white border-t border-brand-gold/20 space-y-4">
                
                {/* Calculations info */}
                <div className="space-y-2 text-xs divide-y divide-brand-gold/10">
                  <div className="flex justify-between pb-1.5">
                    <span className="text-brand-charcoal/60">Subtotal:</span>
                    <span className="font-semibold font-mono text-brand-emerald">${subtotal}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-brand-charcoal/60">Taxes (11% VAT):</span>
                    <span className="font-semibold font-mono text-brand-emerald">${vat}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-brand-charcoal/60">Delivery Fee:</span>
                    <span className="font-semibold font-mono text-brand-emerald">
                      {deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 mt-1 border-t border-brand-gold/25">
                    <span className="font-serif font-bold text-base text-brand-emerald">Total Estimate:</span>
                    <span className="font-serif font-bold text-lg text-brand-emerald font-mono">${total}</span>
                  </div>
                </div>

                {/* Big Action button */}
                {checkoutStep === 'cart' ? (
                  <button
                    onClick={() => setCheckoutStep('details')}
                    className="w-full py-4 bg-brand-emerald hover:bg-brand-darkgreen text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center space-x-1 cursor-pointer shadow-lg shadow-brand-emerald/10"
                  >
                    <span>Proceed to Delivery Details</span>
                    <ChevronRight size={14} />
                  </button>
                ) : null}

              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
