import { motion } from 'motion/react';
import { ChefHat, Leaf, Coffee, Users, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ChefHat className="text-brand-gold" size={24} />,
      title: 'Authentic Lebanese Recipes',
      desc: 'Handed down through generations, combining traditional mountain spices with Beirut café finesse.'
    },
    {
      icon: <Leaf className="text-brand-gold" size={24} />,
      title: 'Fresh Daily Ingredients',
      desc: 'Sourced daily from local organic cooperatives. Pure cold-pressed olive oils and fresh herbs.'
    },
    {
      icon: <Coffee className="text-brand-gold" size={24} />,
      title: 'Premium House Coffee',
      desc: 'Authentic brass-potted cardamom coffee and artful single-origin Arabica cold extractions.'
    },
    {
      icon: <Users className="text-brand-gold" size={24} />,
      title: 'Family-Friendly Atmosphere',
      desc: 'A spacious and warm traditional layout celebrating connection, laughter, and premium dining.'
    },
    {
      icon: <Sparkles className="text-brand-gold" size={24} />,
      title: 'Elegant Dining Experience',
      desc: 'Adorned with custom brass fixtures, hand-carved walnut tables, and a fragrant jasmine courtyard.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream/40 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 pattern-arabic opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 pattern-arabic opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Beautiful visual story & highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-widest text-brand-emerald uppercase block font-mono"
              >
                Our Sacred Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
              >
                A Sanctuary of Lebanese <br />
                <span className="italic font-serif text-brand-walnut">Hospitality & Culture</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-charcoal/80 leading-relaxed text-base"
            >
              Born in the historic heart of Ashrafieh, Hawa Beirut Restaurant & Cafe represents more than just a culinary destination. It is an authentic homage to the rich cultural tapestry, golden memories, and vibrant hospitality of Beirut. Inspired by the soft breeze (Hawa) that carries the floral scent of Lebanese Jasmine, our space is designed as an elegant oasis where families and food lovers gather to celebrate connection.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-charcoal/80 leading-relaxed text-base"
            >
              Every dish is a sensory story: skewered meats grilled over open wood fire, hand-kneaded flatbreads, and aromatic copper-potted coffee infusions. Our chefs combine centuries-old Levant techniques with modern culinary craftsmanship.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <div className="p-2 rounded-lg bg-white shadow-md border border-brand-gold/15 group-hover:bg-brand-emerald/10 group-hover:border-brand-emerald/30 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-brand-emerald tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Overlapping Premium Photo Frames */}
          <div className="lg:col-span-5 relative h-[500px] hidden sm:block">
            {/* Background solid decoration */}
            <div className="absolute top-10 right-10 w-4/5 h-4/5 border-2 border-brand-gold rounded-2xl pointer-events-none" />

            {/* Main top frame (Terrace / Dining experience) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                alt="Hawa Beirut Dining Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-brand-emerald/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-gold/30">
                ✨ Traditional Luxury Dining
              </div>
            </motion.div>

            {/* Sub overlapping frame (Chef / food preparation) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                alt="Lebanese Chef Craftsmanship"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-brand-walnut/95 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-gold/30">
                🔥 Wood-Fired Preparation
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
