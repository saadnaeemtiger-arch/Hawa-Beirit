import { motion } from 'motion/react';
import { ChefHat, Leaf, Coffee, Users, Sparkles, Zap, Award, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="text-brand-gold" size={28} />,
      title: 'Authentic Lebanese Cuisine',
      desc: 'Savor traditional recipes and rich spices direct from the legendary culinary avenues of Beirut.'
    },
    {
      icon: <Leaf className="text-brand-gold" size={28} />,
      title: 'Fresh Ingredients',
      desc: 'Using organic, farm-fresh produce, and premium olive oils squeezed from northern Lebanese orchards.'
    },
    {
      icon: <ChefHat className="text-brand-gold" size={28} />,
      title: 'Expert Chefs',
      desc: 'Our culinary master team features specialized chefs with decades of experience in Levantine cookery.'
    },
    {
      icon: <Coffee className="text-brand-gold" size={28} />,
      title: 'Premium Coffee',
      desc: 'Expertly roasted Arabica beans, vacuum siphons, and traditional cardamom-scented copper pots.'
    },
    {
      icon: <Sparkles className="text-brand-gold" size={28} />,
      title: 'Elegant Ambience',
      desc: 'Intricately constructed custom arches, calming dim brass lanterns, and a blooming jasmine breeze.'
    },
    {
      icon: <Users className="text-brand-gold" size={28} />,
      title: 'Family Dining',
      desc: 'Generous table spreads, warm sharing platters, and comfortable seating to foster family togetherness.'
    },
    {
      icon: <Zap className="text-brand-gold" size={28} />,
      title: 'Fast Service',
      desc: 'Pristine kitchen logistics and attentive waitstaff ensuring hot skewered grates arrive promptly.'
    },
    {
      icon: <Smile className="text-brand-gold" size={28} />,
      title: 'Outstanding Hospitality',
      desc: 'Infusing every greeting and seating with the legendary warm soul of Lebanese welcome, "Ahla w Sahla".'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 pattern-arabic opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-emerald uppercase font-mono block"
          >
            The Hawa Beirut Standard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-emerald"
          >
            Why Dine With <span className="italic font-serif text-brand-walnut">Our Family</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mt-4"
          />
          <p className="max-w-xl mx-auto text-sm text-brand-charcoal/70">
            Discover the eight principles of hospitality, flavor, and sensory elegance that set our landmark restaurant and cafe apart.
          </p>
        </div>

        {/* Bento/Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/45 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-sm group"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-gold/20 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <div className="group-hover:text-brand-gold transition-colors duration-300">
                  {point.icon}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-brand-emerald group-hover:text-brand-walnut transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
