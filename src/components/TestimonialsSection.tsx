import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-cream/30 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-10 w-40 h-40 pattern-arabic opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-40 h-40 pattern-arabic opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Elements */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-emerald uppercase font-mono block animate-pulse"
          >
            Sincere Appreciations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            What Our Patrons <span className="italic font-serif text-brand-walnut">Are Saying</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <p className="max-w-xl mx-auto text-sm text-brand-charcoal/70">
            Read certified diner ratings from Google Reviews and TripAdvisor on food quality, courtyard hospitality, and coffee expertise.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-gold/10 hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between"
            >
              {/* Quote marks */}
              <Quote className="absolute top-6 right-6 text-brand-gold/15" size={48} />

              <div className="space-y-4 relative z-10">
                {/* Star rating */}
                <div className="flex items-center space-x-1 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Comment body */}
                <p className="text-brand-charcoal/80 text-sm leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* User profile details */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-brand-gold/10 relative z-10">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-emerald leading-none">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-brand-charcoal/50 uppercase tracking-wider block mt-1">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Ratings Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-emerald text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-gold/20 shadow-xl"
        >
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-serif font-bold text-brand-gold">
              4.9
            </div>
            <div>
              <div className="flex items-center text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-brand-cream/90 mt-1 font-light">
                Average score based on 1,200+ online Google & TripAdvisor reviews.
              </p>
            </div>
          </div>

          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-brand-gold hover:bg-brand-gold/90 text-brand-emerald font-bold uppercase tracking-wider text-xs rounded-full transition-all duration-300 shadow-md cursor-pointer"
          >
            Write A Review
          </a>
        </motion.div>

      </div>
    </section>
  );
}
