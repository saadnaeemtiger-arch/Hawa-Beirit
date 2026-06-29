import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Instagram, Facebook, Send, CheckCircle, Navigation, Info } from 'lucide-react';

export default function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Simulated Map controls
  const [mapZoom, setMapZoom] = useState(14);

  const handleSubmitMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;

    setIsSent(true);
    setFormName('');
    setFormEmail('');
    setFormMsg('');

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream/20 relative overflow-hidden border-t border-brand-gold/15">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pattern-arabic opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-emerald uppercase font-mono block"
          >
            Connect With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            Visit Our <span className="italic font-serif text-brand-walnut">Ashrafieh Sanctuary</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Details and Form (5 columns) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Quick Details List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-brand-gold/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-brand-emerald border-b border-brand-gold/10 pb-3">
                Reach Out Directly
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-emerald">Restaurant Address</h4>
                    <p className="text-brand-charcoal/80 font-light mt-1 leading-relaxed">
                      Ashrafieh Street, Ashrafieh Block 204, Beirut, Lebanon
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-emerald">Phone Contact</h4>
                    <p className="text-brand-charcoal/80 font-light mt-1">
                      +961 1 234 567 (Main Line)
                    </p>
                    <div className="mt-2">
                      <a
                        href="https://wa.me/961123456"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-[11px] px-3.5 py-1.5 rounded-full shadow transition-all duration-300 transform active:scale-95 cursor-pointer"
                      >
                        <MessageSquare size={12} fill="currentColor" />
                        <span>Chat via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-emerald">Email Direct</h4>
                    <p className="text-brand-charcoal/80 font-light mt-1 hover:underline text-brand-walnut">
                      <a href="mailto:info@hawabeirut.com">info@hawabeirut.com</a>
                    </p>
                  </div>
                </div>

                {/* Social media connections */}
                <div className="flex items-start space-x-3 border-t border-brand-gold/10 pt-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-brand-cream hover:bg-brand-emerald hover:text-white rounded-full text-brand-emerald transition-all border border-brand-gold/25 cursor-pointer"
                      aria-label="Instagram Link"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-brand-cream hover:bg-brand-emerald hover:text-white rounded-full text-brand-emerald transition-all border border-brand-gold/25 cursor-pointer"
                      aria-label="Facebook Link"
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                  <div className="text-[11px] text-brand-charcoal/60 leading-tight self-center">
                    Follow us on social channels for daily live cooking reels and private banquet summaries!
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Message Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-brand-gold/10 flex-grow">
              <h3 className="font-serif text-xl font-bold text-brand-emerald mb-4">
                Leave A Message
              </h3>

              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mb-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl flex items-center space-x-2 text-xs"
                  >
                    <CheckCircle size={16} className="text-green-600 shrink-0" />
                    <span>Your warm note has been logged! We will reach out shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmitMessage} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-brand-charcoal/70 uppercase tracking-wider font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jean"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-gold/20 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-brand-charcoal/70 uppercase tracking-wider font-semibold">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jean@mail.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-gold/20 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-brand-charcoal/70 uppercase tracking-wider font-semibold">Message Detail</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Ask about ingredients, booking alterations, catering requests..."
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-brand-gold/20 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-emerald hover:bg-brand-darkgreen text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-brand-emerald/10"
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right: Highly Interactive Stylized Mock Map (7 columns) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-gold/15 shadow-2xl flex flex-col justify-between bg-brand-emerald text-white h-[450px] sm:h-auto relative min-h-[400px]">
            
            {/* Simulated Map Background Canvas */}
            <div className="absolute inset-0 z-0 bg-brand-darkgreen">
              {/* Map Layout grids & lines */}
              <div className="absolute inset-0 pattern-arabic opacity-[0.06]" />
              
              {/* Fake Street Grids */}
              <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100" x2="2000" y2="100" stroke="#FAF8F5" strokeWidth="2" />
                <line x1="0" y1="350" x2="2000" y2="350" stroke="#FAF8F5" strokeWidth="3" />
                <line x1="250" y1="0" x2="250" y2="2000" stroke="#FAF8F5" strokeWidth="2.5" />
                <line x1="750" y1="0" x2="750" y2="2000" stroke="#FAF8F5" strokeWidth="3" />
                <line x1="0" y1="50" x2="2000" y2="600" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="500" y1="0" x2="0" y2="500" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Simulated Green Parks */}
                <rect x="50" y="150" width="150" height="120" rx="10" fill="#0F5E4D" opacity="0.6" />
                <rect x="520" y="40" width="180" height="220" rx="20" fill="#0F5E4D" opacity="0.4" />
                
                {/* Street Label Texts */}
                <text x="260" y="80" fill="#FAF8F5" fontSize="8" letterSpacing="2" className="font-mono uppercase opacity-70">Ashrafieh Main Ave</text>
                <text x="760" y="280" fill="#FAF8F5" fontSize="8" letterSpacing="2" className="font-mono uppercase opacity-70">Jasmine Garden St</text>
                <text x="50" y="340" fill="#FAF8F5" fontSize="8" letterSpacing="2" className="font-mono uppercase opacity-70">Mar Mitr Way</text>
              </svg>

              {/* Central Map Pin Pointer */}
              <div className="absolute left-[40%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Ripple rings */}
                <span className="absolute w-12 h-12 rounded-full bg-brand-gold/30 animate-ping" />
                
                {/* Visual Pin Card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-1 rounded-full bg-brand-gold shadow-lg z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-emerald flex items-center justify-center border border-white">
                    <span className="text-brand-gold font-serif font-bold text-sm">H</span>
                  </div>
                </motion.div>
                
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-1 shadow-md" />
              </div>
            </div>

            {/* Over-Map HUD details top */}
            <div className="relative z-10 p-4 sm:p-6 flex justify-between items-start pointer-events-none">
              <div className="bg-brand-emerald/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-2 text-[10px] tracking-wider uppercase font-semibold">
                <Navigation size={12} className="text-brand-gold animate-bounce" />
                <span>Live Location: Hawa Beirut</span>
              </div>

              {/* Fake Map HUD Zoom Panel (Clickable!) */}
              <div className="flex flex-col space-y-2 pointer-events-auto">
                <button
                  onClick={() => setMapZoom(Math.min(mapZoom + 1, 18))}
                  className="w-8 h-8 rounded-lg bg-brand-emerald/90 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors text-sm font-bold cursor-pointer"
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  onClick={() => setMapZoom(Math.max(mapZoom - 1, 10))}
                  className="w-8 h-8 rounded-lg bg-brand-emerald/90 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors text-sm font-bold cursor-pointer"
                  title="Zoom Out"
                >
                  -
                </button>
              </div>
            </div>

            {/* Over-Map HUD bottom information banner */}
            <div className="relative z-10 p-4 sm:p-6">
              <div className="bg-brand-darkgreen/95 border border-brand-gold/30 backdrop-blur-md p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-brand-gold/20 text-brand-gold shrink-0">
                    <Info size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Ashrafieh Branch Map</h4>
                    <p className="text-[11px] text-brand-cream/80 font-light leading-snug mt-1">
                      Located in the quiet leafy corner of Ashrafieh Street. Free secure valet parking available for all diners.
                    </p>
                  </div>
                </div>

                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center shrink-0 px-4 py-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-bold text-[10px] tracking-wider uppercase rounded-lg shadow-md transition-all cursor-pointer"
                >
                  Open Directions
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
