import { useState } from 'react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-lightcream relative overflow-hidden border-t border-brand-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Elements */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-brand-walnut mb-2">
            <HelpCircle size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Answers & Clarifications</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            Frequently Asked <span className="italic font-serif text-brand-walnut">Inquiries</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-emerald bg-white shadow-lg'
                    : 'border-brand-gold/20 bg-white/40 hover:border-brand-emerald/40'
                }`}
              >
                {/* Accordion Title Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-brand-emerald pr-4">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-brand-emerald text-white' : 'bg-brand-cream text-brand-emerald'
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light border-t border-brand-gold/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Callout */}
        <div className="mt-12 text-center bg-brand-emerald/5 rounded-2xl p-6 border border-brand-emerald/20 text-xs text-brand-charcoal/80">
          Have an unlisted question about our menu ingredients or event pricing? Contact us directly via WhatsApp for rapid answers.
        </div>

      </div>
    </section>
  );
}
