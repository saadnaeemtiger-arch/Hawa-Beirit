export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy')[];
  isSignature: boolean;
  prepTime: string;
  rating?: number;
  reviewsCount?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'cafe' | 'events';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
