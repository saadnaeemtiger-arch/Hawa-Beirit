import { Category, MenuItem, GalleryItem, Testimonial, FaqItem } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Traditional Lebanese morning feasts with warm flatbreads, cheeses, and egg shakshuka.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    iconName: 'Coffee'
  },
  {
    id: 'mezze',
    name: 'Mezze',
    description: 'Hot and cold small plates. Hummus, mutabbal, vine leaves, falafel, and crisp sambousek.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600',
    iconName: 'Sparkles'
  },
  {
    id: 'mixed-grill',
    name: 'Mixed Grill',
    description: 'Premium skewered meats marinated in signature spices and grilled over natural wood charcoal.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    iconName: 'Flame'
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    description: 'Slow-roasted, tender chicken or beef wrapped in Lebanese bread with hand-made sauces.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600',
    iconName: 'Soup'
  },
  {
    id: 'kebabs',
    name: 'Kebabs',
    description: 'Juicy, ground minced meats cooked with onions, fresh parsley, and sumac seasoning.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600',
    iconName: 'Activity'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: 'Fresh daily catch marinated in Mediterranean herbs, garlic, and freshly squeezed lemon.',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600',
    iconName: 'Waves'
  },
  {
    id: 'pizza-flatbreads',
    name: 'Pizza & Flatbreads',
    description: 'Sourdough flatbreads topped with premium ingredients, za\'atar, halloumi, or minced lamb.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    iconName: 'Compass'
  },
  {
    id: 'burgers-sandwiches',
    name: 'Burgers & Sandwiches',
    description: 'Gourmet street-food sandwiches and custom house burgers with direct Middle Eastern twists.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'fresh-salads',
    name: 'Fresh Salads',
    description: 'Crisp green salads loaded with zesty vinaigrettes, virgin olive oil, herbs, and pomegranates.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    iconName: 'Leaf'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet, rich Arabic delicacies featuring layers of golden phyllo, floral syrups, and nuts.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    iconName: 'Cake'
  },
  {
    id: 'coffee',
    name: 'Coffee & Café',
    description: 'Premium house-blend espresso, rich traditional Arabic coffee, and artful botanical lattes.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    iconName: 'CupSoda'
  },
  {
    id: 'fresh-juices',
    name: 'Fresh Juices',
    description: 'Cold-pressed local citrus, pomegranate, mint, and tropical blends made per order.',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600',
    iconName: 'Grape'
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    description: 'Artisanal non-alcoholic botanical mixtures, rosewater coolers, and refreshing mojitos.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    iconName: 'GlassWater'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // SIGNATURES
  {
    id: 'sig-mixed-grill',
    name: 'Mixed Grill Platter',
    description: 'The ultimate charcoal feast: skewers of shish taouk, tender lamb kebab, and beef kafta. Served on warm flatbread with baked tomatoes, sumac onions, garlic whip, and a side of spiced rice.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'mixed-grill',
    dietary: [],
    isSignature: true,
    prepTime: '20-25 mins',
    rating: 4.9,
    reviewsCount: 312
  },
  {
    id: 'sig-chicken-shawarma',
    name: 'Chicken Shawarma Platter',
    description: 'Layers of premium chicken, slow-roasted on a vertical spit, thinly sliced. Served with golden fries, pickled wild cucumbers, freshly whipped toum (garlic sauce), and house flatbread.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    category: 'shawarma',
    dietary: [],
    isSignature: true,
    prepTime: '15 mins',
    rating: 4.8,
    reviewsCount: 245
  },
  {
    id: 'sig-mezze-platter',
    name: 'Hummus & Mezze Platter',
    description: 'A luxurious assortment of Hawa Beirut\'s signature cold and hot mezze: silk-smooth hummus, smoky baba ghanoush, spicy muhammara, tabbouleh, crispy falafel, and stuffed grape leaves.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'mezze',
    dietary: ['vegetarian'],
    isSignature: true,
    prepTime: '10 mins',
    rating: 4.9,
    reviewsCount: 412
  },
  {
    id: 'sig-lamb-kebab',
    name: 'Lamb Kebab skewers',
    description: 'Premium minced Australian lamb combined with freshly chopped mint, parsley, red onions, and sweet Baharat spice. Grilled on open charcoal, accompanied by spiced bulgur wheat.',
    price: 29,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    category: 'kebabs',
    dietary: [],
    isSignature: true,
    prepTime: '15-20 mins',
    rating: 4.8,
    reviewsCount: 189
  },
  {
    id: 'sig-fattoush',
    name: 'Zesty Fattoush Salad',
    description: 'Sustainably grown romaine lettuce, fresh purslane, heirloom cherry tomatoes, crunchy radishes, and mini cucumbers tossed in a tangy pomegranate-sumac dressing, topped with baked crisp pita chips.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'fresh-salads',
    dietary: ['vegetarian', 'vegan'],
    isSignature: true,
    prepTime: '8 mins',
    rating: 4.7,
    reviewsCount: 156
  },
  {
    id: 'sig-manakish',
    name: 'Manakish Duo (Za\'atar & Cheese)',
    description: 'Freshly stretched sourdough flatbread baked inside our clay oven. One half topped with premium wild Lebanese thyme and sesame seeds in extra-virgin olive oil, the other half with melted Akawi cheese.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    category: 'pizza-flatbreads',
    dietary: ['vegetarian'],
    isSignature: true,
    prepTime: '12 mins',
    rating: 4.9,
    reviewsCount: 220
  },
  {
    id: 'sig-kunafa',
    name: 'Traditional Golden Kunafa',
    description: 'Crisp, shredded kataifi pastry surrounding a hot, melted sweet-cheese core, baked to golden perfection. Drenched in custom orange-blossom and rosewater syrup, topped with ground green pistachios.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    category: 'desserts',
    dietary: ['vegetarian'],
    isSignature: true,
    prepTime: '15 mins',
    rating: 4.9,
    reviewsCount: 354
  },
  {
    id: 'sig-baklava',
    name: 'Artisan Baklava Box',
    description: 'A premium handmade selection of flaky phyllo pastries, intensely layered with wild organic honey and stuffed with premium crushed pine nuts, walnuts, and green pistachios.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800',
    category: 'desserts',
    dietary: ['vegetarian'],
    isSignature: true,
    prepTime: '5 mins',
    rating: 4.7,
    reviewsCount: 168
  },
  {
    id: 'sig-arabic-coffee',
    name: 'Traditional Arabic Coffee',
    description: 'Our proprietary roast of premium Arabica coffee beans boiled in a traditional brass Dallah pot. Scented with green cardamom seeds and served in beautiful ornate ceramic Finjan cups.',
    price: 9,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800',
    category: 'coffee',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    isSignature: true,
    prepTime: '10 mins',
    rating: 4.9,
    reviewsCount: 289
  },
  {
    id: 'sig-rose-latte',
    name: 'Beirut Rose Specialty Latte',
    description: 'A double shot of local organic espresso, micro-foamed farm milk infused with natural Damascus rosewater, and decorated with dried red organic rose petals. A sweet and fragrant sensory masterpiece.',
    price: 8,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    category: 'coffee',
    dietary: ['vegetarian', 'gluten-free'],
    isSignature: true,
    prepTime: '5 mins',
    rating: 4.8,
    reviewsCount: 194
  },

  // REGULAR ITEMS - BREAKFAST
  {
    id: 'bf-shakshuka',
    name: 'Spiced Shakshuka',
    description: 'Three farm-fresh organic eggs poached in a rich simmered sauce of fresh tomatoes, sweet bell peppers, red onions, garlic, cumin, and house green chilis. Served with clay-oven baked bread.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    dietary: ['vegetarian'],
    isSignature: false,
    prepTime: '12 mins'
  },
  {
    id: 'bf-halloumi',
    name: 'Pan-Seared Cypress Halloumi',
    description: 'Thick slabs of premium Halloumi cheese seared on a copper skillet. Served with refreshing watermelon slices, sweet pomegranate seeds, wild mint leaves, and cucumber.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    dietary: ['vegetarian', 'gluten-free'],
    isSignature: false,
    prepTime: '10 mins'
  },

  // REGULAR ITEMS - MEZZE
  {
    id: 'mz-falafel',
    name: 'Golden Herb Falafel',
    description: 'Six crispy, hand-rolled spiced chickpea and herb croquettes. Served with rich nutty tahini sauce, pickled turnip stems, parsley garnish, and freshly baked flatbread.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1547058886-af77813be275?auto=format&fit=crop&q=80&w=600',
    category: 'mezze',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    isSignature: false,
    prepTime: '8 mins'
  },
  {
    id: 'mz-kibbeh',
    name: 'Spiced Lamb Kibbeh',
    description: 'Four football-shaped crusts of cracked bulgur wheat and lean minced beef, stuffed with sautéed pine nuts, onions, and minced lamb shoulder, deep fried to perfect crispness.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1541014741259-df5290dbf825?auto=format&fit=crop&q=80&w=600',
    category: 'mezze',
    dietary: [],
    isSignature: false,
    prepTime: '12 mins'
  },

  // REGULAR ITEMS - SEAFOOD
  {
    id: 'sf-sea-bass',
    name: 'Grilled Mediterranean Sea Bass',
    description: 'Whole locally caught sea bass charcoal-grilled with fresh coriander, red chilis, garlic, extra-virgin olive oil, and sliced lemon. Served over saffron-scented long grain rice.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    category: 'seafood',
    dietary: ['gluten-free'],
    isSignature: false,
    prepTime: '22 mins'
  },

  // REGULAR ITEMS - BURGERS
  {
    id: 'bg-beirut-burger',
    name: 'Hawa Beirut Gourmet Burger',
    description: 'Premium grilled Wagyu beef patty topped with melted halloumi cheese, roasted red pepper relish, wild rocket, sliced tomato, and our custom harissa mayo in a toasted brioche bun.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    category: 'burgers-sandwiches',
    dietary: [],
    isSignature: false,
    prepTime: '15 mins'
  },

  // REGULAR ITEMS - SALADS
  {
    id: 'sd-tabbouleh',
    name: 'Authentic Parsley Tabbouleh',
    description: 'Finely minced fresh flat-leaf parsley, vine-ripe tomatoes, sweet red onions, and fine bulgur wheat, seasoned with hand-pressed lemon juice and early harvest olive oil.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1623428187969-5da2d87f0bc9?auto=format&fit=crop&q=80&w=600',
    category: 'fresh-salads',
    dietary: ['vegetarian', 'vegan'],
    isSignature: false,
    prepTime: '7 mins'
  },

  // REGULAR ITEMS - JUICES
  {
    id: 'jc-pom-orange',
    name: 'Pure Pomegranate & Orange Juice',
    description: 'Fresh organic local oranges cold pressed and mixed with freshly crushed ruby pomegranate seeds. No sugar added, served ice-cold for a healthy and vibrant lift.',
    price: 9,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600',
    category: 'fresh-juices',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    isSignature: false,
    prepTime: '4 mins'
  },

  // REGULAR ITEMS - MOCKTAILS
  {
    id: 'mc-rose-cooler',
    name: 'Botanical Rosewater Cooler',
    description: 'Sustainably sourced botanical infusion of wild cucumber ribbons, organic fresh mint, freshly squeezed lime juice, pure rosewater distillate, topped with sparkling tonic.',
    price: 11,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    category: 'mocktails',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    isSignature: false,
    prepTime: '5 mins'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-dish-1',
    title: 'Wood-fired Flatbread Prep',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    description: 'Our expert chefs stretching organic sourdough flatbreads to be baked inside our custom Lebanese brick oven.'
  },
  {
    id: 'gal-interior-1',
    title: 'The Royal Emerald Dining Room',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'Sophisticated interior styling pairing deep emerald green booths, warm custom brass lanterns, and natural walnut arches.'
  },
  {
    id: 'gal-exterior-1',
    title: 'Al-Fresco Jasmine Terrace',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800',
    description: 'Relaxing outdoor courtyard surrounded by blooming white jasmine flowers, green climbing vines, and beautiful cascading water fountains.'
  },
  {
    id: 'gal-cafe-1',
    title: 'Siphon Coffee Extraction',
    category: 'cafe',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    description: 'Slow-drip siphon brewing method releasing complex herbal aromas of our signature single-origin Arabica beans.'
  },
  {
    id: 'gal-dessert-1',
    title: 'Hot Sweet Kunafa Bake',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh copper pans of shredded kataifi pastry and melted cheese, sizzling right before the rosewater glaze is poured.'
  },
  {
    id: 'gal-events-1',
    title: 'Traditional Table Settings',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious gold-accented tableware and floral ornaments assembled for a private corporate Mediterranean banquet.'
  },
  {
    id: 'gal-chef-1',
    title: 'Master Skewering and Spicing',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    description: 'Chef Mansour seasoning premium lamb kebabs with wild Lebanese sumac, sweet allspice, and pomegranate molasses.'
  },
  {
    id: 'gal-cafe-2',
    title: 'Botanical Latte Pour',
    category: 'cafe',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800',
    description: 'Beautiful foam art featuring organic cardamom, dried rose buds, and natural flower extracts.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Yara Al-Sayegh',
    role: 'Food & Lifestyle Critic',
    rating: 5,
    comment: 'The Hummus & Mezze Platter took me right back to my grandmother\'s house in Beirut. Smooth, rich, and bursting with fresh herbs. The atmosphere is top-tier luxury.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: 'June 14, 2026'
  },
  {
    id: 't-2',
    name: 'Karim Haddad',
    role: 'Local Patron',
    rating: 5,
    comment: 'Unbelievable mixed grill! Perfectly seasoned, charcoal flavor shines through without drying the meat. The Arabic coffee setup in brass was an incredible touch.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: 'May 28, 2026'
  },
  {
    id: 't-3',
    name: 'Nour El-Khoury',
    role: 'Event Coordinator',
    rating: 5,
    comment: 'We booked the jasmine terrace for our engagement dinner. The staff\'s warmth and hospitality were beyond outstanding. Every guest was blown away by the Kunafa!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    date: 'April 19, 2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do you accept walk-ins, or are reservations required?',
    answer: 'We happily welcome both walk-ins and reservations! However, due to high demand on weekends and evenings, we highly recommend making a reservation online or via WhatsApp to guarantee your preferred seating area (royal indoor room or outdoor jasmine terrace).'
  },
  {
    id: 'faq-2',
    question: 'Do you offer takeaway and home delivery services?',
    answer: 'Yes! We offer convenient curbside pickup and takeaway directly from our cafe counter. We also partner with premium delivery apps and provide dedicated direct home delivery within a 10km radius of the restaurant. You can preview your items in our digital ordering module.'
  },
  {
    id: 'faq-3',
    question: 'Are there vegetarian, vegan, and gluten-free options available?',
    answer: 'Absolutely. Authenticity and dietary inclusivity are core to Lebanese cuisine. Over 40% of our traditional hot and cold mezze are naturally vegetarian or vegan (such as our premium Hummus, Tabbouleh, Falafel, and Baba Ghanoush). We highlight dietary tags (Vegetarian, Vegan, Gluten-Free) clearly on our digital menu.'
  },
  {
    id: 'faq-4',
    question: 'What are your exact opening hours and cafe service times?',
    answer: 'Our Restaurant and Al-Fresco Terrace are open daily from 9:00 AM to 11:30 PM. Our Specialty Coffee & Pastry counter opens early at 8:00 AM for fresh baked Manakish, rose lattes, and classic Arabic coffee.'
  },
  {
    id: 'faq-5',
    question: 'Can you accommodate large family groups or private corporate events?',
    answer: 'Yes! We love hosting family celebrations, corporate luncheons, and custom gatherings. We can curate bespoke fixed menus and offer semi-private booking for up to 100 guests. Please note any details or inquiries in our online booking form under Special Requests.'
  }
];
