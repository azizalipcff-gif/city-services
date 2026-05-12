export interface Business {
  id: number;
  name: string;
  logo: string;
  image: string;
  gallery: string[];
  category: string;
  city: string;
  address: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  open: boolean;
  featured: boolean;
  popular: boolean;
  priceRange: '$' | '$$' | '$$$';
  coordinates: { lat: number; lng: number };
  socialLinks: {
    facebook: string;
    instagram: string;
    website: string;
  };
  openingHours: { day: string; hours: string }[];
}

export interface Review {
  id: number;
  businessId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface UserProfile {
  id: number;
  name: string;
  avatar: string;
  city: string;
  favorites: number[];
  reviews: { businessId: number; rating: number; comment: string; date: string }[];
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface CityPage {
  city: string;
  popularBusinesses: number[];
  topCategories: string[];
  featuredServices: string[];
  description: string;
}

export const trendingSearches = [
  'pc repair oujda',
  'wifi oujda',
  'restaurant oujda',
  'mechanic oujda',
  'electrician casablanca',
  'phone repair rabat',
  'gym fes',
  'cleaning services nador'
];

export const categories = [
  { name: 'PC Repair', count: 5, color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'WiFi & Internet', count: 5, color: 'from-green-500/20 to-emerald-500/20' },
  { name: 'Phone Repair', count: 5, color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Restaurants', count: 5, color: 'from-orange-500/20 to-red-500/20' },
  { name: 'Cafés', count: 5, color: 'from-amber-500/20 to-yellow-500/20' },
  { name: 'Electricians', count: 5, color: 'from-yellow-500/20 to-amber-500/20' },
  { name: 'Plumbing', count: 5, color: 'from-indigo-500/20 to-blue-500/20' },
  { name: 'Car Mechanics', count: 3, color: 'from-slate-500/20 to-gray-500/20' },
  { name: 'Cleaning Services', count: 6, color: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Delivery Services', count: 5, color: 'from-lime-500/20 to-green-500/20' },
  { name: 'Security Cameras', count: 5, color: 'from-rose-500/20 to-pink-500/20' },
  { name: 'Graphic Design', count: 2, color: 'from-violet-500/20 to-indigo-500/20' },
  { name: 'Photography', count: 2, color: 'from-fuchsia-500/20 to-pink-500/20' },
  { name: 'Barbershops', count: 2, color: 'from-sky-500/20 to-blue-500/20' },
  { name: 'Gyms', count: 2, color: 'from-emerald-500/20 to-lime-500/20' }
];

export const businesses: Business[] = [
  {
    id: 1,
    name: 'Oujda Tech Repair',
    logo: '💻',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'PC Repair',
    city: 'Oujda',
    address: 'Avenue Mohamed V 45, Oujda 60000',
    description: 'Professional PC and laptop repair services in Oujda with fast diagnostics, affordable prices, and experienced technicians.',
    phone: '+212 600 000 001',
    whatsapp: '+212600000001',
    email: 'contact@oujdatechrepair.ma',
    website: 'https://oujdatechrepair.ma',
    rating: 4.9,
    reviewsCount: 192,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.6829, lng: -1.9095 },
    socialLinks: {
      facebook: 'https://facebook.com/oujdatechrepair',
      instagram: 'https://instagram.com/oujdatechrepair',
      website: 'https://oujdatechrepair.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 2,
    name: 'Smart WiFi Oujda',
    logo: '📡',
    image: 'https://images.unsplash.com/photo-1516291648141-72525e4d7b2a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516291648141-72525e4d7b2a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516291648141-72525e4d7b2a?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1516291648141-72525e4d7b2a?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'WiFi & Internet',
    city: 'Oujda',
    address: 'Rue des Princes 12, Oujda 60020',
    description: 'High-speed internet setup and WiFi optimization for homes and businesses in Oujda. Reliable support with local technicians.',
    phone: '+212 600 000 002',
    whatsapp: '+212600000002',
    email: 'hello@smartwifioujda.ma',
    website: 'https://smartwifioujda.ma',
    rating: 4.8,
    reviewsCount: 143,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.6977, lng: -1.9167 },
    socialLinks: {
      facebook: 'https://facebook.com/smartwifioujda',
      instagram: 'https://instagram.com/smartwifioujda',
      website: 'https://smartwifioujda.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Tuesday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Wednesday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Thursday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Friday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 3,
    name: 'Atlas Phone Repair',
    logo: '📱',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Phone Repair',
    city: 'Oujda',
    address: 'Avenue de la Gare 9, Oujda 60000',
    description: 'Trusted smartphone repair center in Oujda. Fast screen replacement, battery repair, and diagnostics with certified parts.',
    phone: '+212 600 000 003',
    whatsapp: '+212600000003',
    email: 'support@atlasphonerepair.ma',
    website: 'https://atlasphonerepair.ma',
    rating: 4.7,
    reviewsCount: 218,
    verified: true,
    open: false,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.6886, lng: -1.9101 },
    socialLinks: {
      facebook: 'https://facebook.com/atlasphonerepair',
      instagram: 'https://instagram.com/atlasphonerepair',
      website: 'https://atlasphonerepair.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '10:00 AM - 7:00 PM' },
      { day: 'Tuesday', hours: '10:00 AM - 7:00 PM' },
      { day: 'Wednesday', hours: '10:00 AM - 7:00 PM' },
      { day: 'Thursday', hours: '10:00 AM - 7:00 PM' },
      { day: 'Friday', hours: '10:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '11:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 4,
    name: 'Golden Restaurant',
    logo: '🍽️',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Restaurants',
    city: 'Oujda',
    address: 'Boulevard Mohamed V 52, Oujda 60000',
    description: 'Modern Moroccan restaurant in Oujda offering gourmet tagines, fresh seafood, and elegant dining experiences in a stylish setting.',
    phone: '+212 600 000 004',
    whatsapp: '+212600000004',
    email: 'reservations@goldenrestaurant.ma',
    website: 'https://goldenrestaurant.ma',
    rating: 4.9,
    reviewsCount: 326,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$$',
    coordinates: { lat: 34.6852, lng: -1.9168 },
    socialLinks: {
      facebook: 'https://facebook.com/goldenrestaurantoujda',
      instagram: 'https://instagram.com/goldenrestaurantoujda',
      website: 'https://goldenrestaurant.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Tuesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Wednesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Thursday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Friday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Saturday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 5,
    name: 'Medina Café',
    logo: '☕',
    image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cafés',
    city: 'Oujda',
    address: 'Place de la République 7, Oujda 60010',
    description: 'Contemporary café with specialty coffee, pastries, and a cozy atmosphere. Ideal for remote work, meetings, and relaxed social time.',
    phone: '+212 600 000 005',
    whatsapp: '+212600000005',
    email: 'hello@medinacafe.ma',
    website: 'https://medinacafe.ma',
    rating: 4.7,
    reviewsCount: 198,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.6865, lng: -1.9162 },
    socialLinks: {
      facebook: 'https://facebook.com/medinacafeoujda',
      instagram: 'https://instagram.com/medinacafeoujda',
      website: 'https://medinacafe.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 11:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 11:00 PM' },
      { day: 'Sunday', hours: '9:00 AM - 9:00 PM' }
    ]
  },
  {
    id: 6,
    name: 'SecureCam Oujda',
    logo: '📹',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2a?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2a?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Security Cameras',
    city: 'Oujda',
    address: 'Route de Berkane 82, Oujda 60000',
    description: 'Trusted CCTV and security camera installation with remote monitoring, alarm integration, and smart home compatibility.',
    phone: '+212 600 000 006',
    whatsapp: '+212600000006',
    email: 'sales@securecamoujda.ma',
    website: 'https://securecamoujda.ma',
    rating: 4.6,
    reviewsCount: 110,
    verified: true,
    open: true,
    featured: true,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 34.6913, lng: -1.9108 },
    socialLinks: {
      facebook: 'https://facebook.com/securecamoujda',
      instagram: 'https://instagram.com/securecamoujda',
      website: 'https://securecamoujda.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 7,
    name: 'Fast Delivery Oujda',
    logo: '🚚',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Delivery Services',
    city: 'Oujda',
    address: 'Zone Industrielle 17, Oujda 60000',
    description: 'Same-day courier and delivery service in Oujda with live tracking, secure handling, and flexible pickup options.',
    phone: '+212 600 000 007',
    whatsapp: '+212600000007',
    email: 'info@fastdeliveryoujda.ma',
    website: 'https://fastdeliveryoujda.ma',
    rating: 4.5,
    reviewsCount: 156,
    verified: false,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$',
    coordinates: { lat: 34.6800, lng: -1.9110 },
    socialLinks: {
      facebook: 'https://facebook.com/fastdeliveryoujda',
      instagram: 'https://instagram.com/fastdeliveryoujda',
      website: 'https://fastdeliveryoujda.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '7:00 AM - 9:00 PM' },
      { day: 'Tuesday', hours: '7:00 AM - 9:00 PM' },
      { day: 'Wednesday', hours: '7:00 AM - 9:00 PM' },
      { day: 'Thursday', hours: '7:00 AM - 9:00 PM' },
      { day: 'Friday', hours: '7:00 AM - 9:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
      { day: 'Sunday', hours: '8:00 AM - 6:00 PM' }
    ]
  },
  {
    id: 8,
    name: 'ProClean Services',
    logo: '🧼',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cleaning Services',
    city: 'Oujda',
    address: 'Lotissement Al Wifaq 5, Oujda 60000',
    description: 'Premium residential and commercial cleaning services in Oujda, including deep cleaning, move-out service, and sanitization.',
    phone: '+212 600 000 008',
    whatsapp: '+212600000008',
    email: 'service@procleanoujda.ma',
    website: 'https://procleanoujda.ma',
    rating: 4.8,
    reviewsCount: 105,
    verified: true,
    open: true,
    featured: true,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 34.6891, lng: -1.9005 },
    socialLinks: {
      facebook: 'https://facebook.com/procleanoujda',
      instagram: 'https://instagram.com/procleanoujda',
      website: 'https://procleanoujda.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 9,
    name: 'Atlas Electricians',
    logo: '⚡',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Electricians',
    city: 'Oujda',
    address: 'Avenue Fadouaa 4, Oujda 60000',
    description: 'Experienced electricians providing home rewiring, lighting installation, and emergency repairs across Oujda.',
    phone: '+212 600 000 009',
    whatsapp: '+212600000009',
    email: 'contact@atlaselectricians.ma',
    website: 'https://atlaselectricians.ma',
    rating: 4.6,
    reviewsCount: 87,
    verified: true,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.6835, lng: -1.9043 },
    socialLinks: {
      facebook: 'https://facebook.com/atlaselectricians',
      instagram: 'https://instagram.com/atlaselectricians',
      website: 'https://atlaselectricians.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 10,
    name: 'Sahara Plumbing',
    logo: '🚿',
    image: 'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Plumbing',
    city: 'Oujda',
    address: 'Route de Nador 21, Oujda 60000',
    description: 'Plumbing specialists for leak repair, installations, and emergency service in Oujda. Fast response and quality guarantees.',
    phone: '+212 600 000 010',
    whatsapp: '+212600000010',
    email: 'support@saharaplumbing.ma',
    website: 'https://saharaplumbing.ma',
    rating: 4.4,
    reviewsCount: 74,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$',
    coordinates: { lat: 34.6873, lng: -1.9125 },
    socialLinks: {
      facebook: 'https://facebook.com/saharaplumbing',
      instagram: 'https://instagram.com/saharaplumbing',
      website: 'https://saharaplumbing.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:30 AM - 5:30 PM' },
      { day: 'Tuesday', hours: '8:30 AM - 5:30 PM' },
      { day: 'Wednesday', hours: '8:30 AM - 5:30 PM' },
      { day: 'Thursday', hours: '8:30 AM - 5:30 PM' },
      { day: 'Friday', hours: '8:30 AM - 5:30 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 11,
    name: 'Nador Fix Center',
    logo: '🖥️',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'PC Repair',
    city: 'Nador',
    address: 'Avenue Hassan II 20, Nador 62000',
    description: 'Trusted PC repair specialists in Nador with same-day service, data recovery, and hardware upgrades for desktops and laptops.',
    phone: '+212 661 000 011',
    whatsapp: '+212661000011',
    email: 'service@nadorfixcenter.ma',
    website: 'https://nadorfixcenter.ma',
    rating: 4.7,
    reviewsCount: 150,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 35.1683, lng: -2.9336 },
    socialLinks: {
      facebook: 'https://facebook.com/nadorfixcenter',
      instagram: 'https://instagram.com/nadorfixcenter',
      website: 'https://nadorfixcenter.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 12,
    name: 'Nador NetWorks',
    logo: '🌐',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'WiFi & Internet',
    city: 'Nador',
    address: 'Quartier Al Matar 14, Nador 62000',
    description: 'Nador-based internet specialists offering fiber, WiFi optimization, and remote support for households and small businesses.',
    phone: '+212 661 000 012',
    whatsapp: '+212661000012',
    email: 'contact@nadornetworks.ma',
    website: 'https://nadornetworks.ma',
    rating: 4.5,
    reviewsCount: 98,
    verified: true,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 35.1708, lng: -2.9294 },
    socialLinks: {
      facebook: 'https://facebook.com/nadornetworks',
      instagram: 'https://instagram.com/nadornetworks',
      website: 'https://nadornetworks.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Tuesday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Wednesday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Thursday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Friday', hours: '8:30 AM - 6:30 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 13,
    name: 'PhoneCare Nador',
    logo: '📲',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Phone Repair',
    city: 'Nador',
    address: 'Rue des Orangers 30, Nador 62000',
    description: 'Nador phone repair experts offering screen replacements, battery swaps, and fast troubleshooting for Android and iPhone devices.',
    phone: '+212 661 000 013',
    whatsapp: '+212661000013',
    email: 'support@phonecarenador.ma',
    website: 'https://phonecarenador.ma',
    rating: 4.6,
    reviewsCount: 129,
    verified: true,
    open: true,
    featured: true,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 35.1689, lng: -2.9309 },
    socialLinks: {
      facebook: 'https://facebook.com/phonecarenador',
      instagram: 'https://instagram.com/phonecarenador',
      website: 'https://phonecarenador.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 14,
    name: 'Coastal Dine',
    logo: '🍷',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Restaurants',
    city: 'Nador',
    address: 'Boulevard Mohamed V 8, Nador 62000',
    description: 'Seaside restaurant with creative Moroccan and Mediterranean cuisine, fresh seafood, and warm service in Nador.',
    phone: '+212 661 000 014',
    whatsapp: '+212661000014',
    email: 'bookings@coastaldine.ma',
    website: 'https://coastaldine.ma',
    rating: 4.8,
    reviewsCount: 204,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$$',
    coordinates: { lat: 35.1680, lng: -2.9290 },
    socialLinks: {
      facebook: 'https://facebook.com/coastaldine',
      instagram: 'https://instagram.com/coastaldine',
      website: 'https://coastaldine.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Tuesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Wednesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Thursday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Friday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Saturday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 15,
    name: 'Café Al Mistral',
    logo: '🍰',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cafés',
    city: 'Nador',
    address: 'Place Ibn Sina 3, Nador 62000',
    description: 'Contemporary café serving artisanal coffee, pastries, and light bites with a relaxed terrace in the heart of Nador.',
    phone: '+212 661 000 015',
    whatsapp: '+212661000015',
    email: 'hello@cafemistral.ma',
    website: 'https://cafemistral.ma',
    rating: 4.7,
    reviewsCount: 134,
    verified: false,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 35.1722, lng: -2.9299 },
    socialLinks: {
      facebook: 'https://facebook.com/cafemistral',
      instagram: 'https://instagram.com/cafemistral',
      website: 'https://cafemistral.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 10:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 11:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 11:00 PM' },
      { day: 'Sunday', hours: '9:00 AM - 9:00 PM' }
    ]
  },
  {
    id: 16,
    name: 'Nador SecureCam',
    logo: '🛡️',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Security Cameras',
    city: 'Nador',
    address: 'Zone Commerciale Oued Laou 11, Nador 62000',
    description: 'Security camera and alarm specialists in Nador offering commercial CCTV systems and home surveillance packages.',
    phone: '+212 661 000 016',
    whatsapp: '+212661000016',
    email: 'info@nadorsecurecam.ma',
    website: 'https://nadorsecurecam.ma',
    rating: 4.4,
    reviewsCount: 72,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 35.1605, lng: -2.9249 },
    socialLinks: {
      facebook: 'https://facebook.com/nadorsecurecam',
      instagram: 'https://instagram.com/nadorsecurecam',
      website: 'https://nadorsecurecam.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 17,
    name: 'Speed Delivery Nador',
    logo: '📦',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Delivery Services',
    city: 'Nador',
    address: 'Avenue de l’Ocean 2, Nador 62000',
    description: 'Reliable courier and last-mile delivery service in Nador with flexible pickup locations and quick local delivery times.',
    phone: '+212 661 000 017',
    whatsapp: '+212661000017',
    email: 'hello@speeddeliverynador.ma',
    website: 'https://speeddeliverynador.ma',
    rating: 4.3,
    reviewsCount: 82,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$',
    coordinates: { lat: 35.1628, lng: -2.9301 },
    socialLinks: {
      facebook: 'https://facebook.com/speeddeliverynador',
      instagram: 'https://instagram.com/speeddeliverynador',
      website: 'https://speeddeliverynador.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Thursday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Sunday', hours: '9:00 AM - 5:00 PM' }
    ]
  },
  {
    id: 18,
    name: 'BlueWave Cleaners',
    logo: '🧹',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cleaning Services',
    city: 'Nador',
    address: 'Rue Jasmine 10, Nador 62000',
    description: 'Professional home and office cleaning crews in Nador offering deep cleaning, post-renovation services, and recurring schedules.',
    phone: '+212 661 000 018',
    whatsapp: '+212661000018',
    email: 'service@bluewavecleaners.ma',
    website: 'https://bluewavecleaners.ma',
    rating: 4.6,
    reviewsCount: 94,
    verified: true,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 35.1654, lng: -2.9278 },
    socialLinks: {
      facebook: 'https://facebook.com/bluewavecleaners',
      instagram: 'https://instagram.com/bluewavecleaners',
      website: 'https://bluewavecleaners.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 19,
    name: 'Nador PowerTech',
    logo: '🔌',
    image: 'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Electricians',
    city: 'Nador',
    address: 'Avenue de la Plage 5, Nador 62000',
    description: 'Commercial and residential electrical services in Nador, including smart lighting, panel upgrades, and emergency repairs.',
    phone: '+212 661 000 019',
    whatsapp: '+212661000019',
    email: 'contact@nadorpowertech.ma',
    website: 'https://nadorpowertech.ma',
    rating: 4.5,
    reviewsCount: 89,
    verified: false,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 35.1672, lng: -2.9315 },
    socialLinks: {
      facebook: 'https://facebook.com/nadorpowertech',
      instagram: 'https://instagram.com/nadorpowertech',
      website: 'https://nadorpowertech.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 20,
    name: 'Nador PipeWorks',
    logo: '🔧',
    image: 'https://images.unsplash.com/photo-1598530627122-9c2d9b9f61e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598530627122-9c2d9b9f61e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598530627122-9c2d9b9f61e8?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1598530627122-9c2d9b9f61e8?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Plumbing',
    city: 'Nador',
    address: 'Rue du Port 41, Nador 62000',
    description: 'Nador plumbing experts available for installations, repairs, and maintenance across homes and businesses.',
    phone: '+212 661 000 020',
    whatsapp: '+212661000020',
    email: 'support@nadorpipeworks.ma',
    website: 'https://nadorpipeworks.ma',
    rating: 4.3,
    reviewsCount: 66,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$',
    coordinates: { lat: 35.1695, lng: -2.9323 },
    socialLinks: {
      facebook: 'https://facebook.com/nadorpipeworks',
      instagram: 'https://instagram.com/nadorpipeworks',
      website: 'https://nadorpipeworks.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 21,
    name: 'Berkane Mobile Clinic',
    logo: '📱',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1512499617640-c2f99912caf1?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Phone Repair',
    city: 'Berkane',
    address: 'Avenue Ibn Sina 18, Berkane 60000',
    description: 'Mobile phone and tablet repair boutique in Berkane with same-day service, warranty on repairs, and original replacement parts.',
    phone: '+212 661 000 021',
    whatsapp: '+212661000021',
    email: 'hello@berkanemobileclinic.ma',
    website: 'https://berkanemobileclinic.ma',
    rating: 4.7,
    reviewsCount: 121,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.9186, lng: -2.3219 },
    socialLinks: {
      facebook: 'https://facebook.com/berkanemobileclinic',
      instagram: 'https://instagram.com/berkanemobileclinic',
      website: 'https://berkanemobileclinic.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 22,
    name: 'Berkane NetLab',
    logo: '📶',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'WiFi & Internet',
    city: 'Berkane',
    address: 'Boulevard Hassan II 6, Berkane 60000',
    description: 'Berkane internet specialists offering home and office WiFi solutions, fiber installations, and network troubleshooting.',
    phone: '+212 661 000 022',
    whatsapp: '+212661000022',
    email: 'support@berkanenetlab.ma',
    website: 'https://berkanenetlab.ma',
    rating: 4.6,
    reviewsCount: 89,
    verified: false,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.9234, lng: -2.3175 },
    socialLinks: {
      facebook: 'https://facebook.com/berkanenetlab',
      instagram: 'https://instagram.com/berkanenetlab',
      website: 'https://berkanenetlab.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 23,
    name: 'Atlas Mechanics Berkane',
    logo: '🚗',
    image: 'https://images.unsplash.com/photo-1517904726775-7db643f268dd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517904726775-7db643f268dd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517904726775-7db643f268dd?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1517904726775-7db643f268dd?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Car Mechanics',
    city: 'Berkane',
    address: 'Zone Industrielle 3, Berkane 60000',
    description: 'Full-service auto repair shop in Berkane with diagnostics, brakes, oil change, and rapid maintenance for all vehicle brands.',
    phone: '+212 661 000 023',
    whatsapp: '+212661000023',
    email: 'service@atlasmechanicsberkane.ma',
    website: 'https://atlasmechanicsberkane.ma',
    rating: 4.8,
    reviewsCount: 172,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.9199, lng: -2.3137 },
    socialLinks: {
      facebook: 'https://facebook.com/atlasmechanicsberkane',
      instagram: 'https://instagram.com/atlasmechanicsberkane',
      website: 'https://atlasmechanicsberkane.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 24,
    name: 'Golden Grill Berkane',
    logo: '🥘',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Restaurants',
    city: 'Berkane',
    address: 'Boulevard Ibn Khaldoun 11, Berkane 60000',
    description: 'Contemporary restaurant in Berkane serving grilled specialties, fresh salads, and modern Moroccan classics in a lively setting.',
    phone: '+212 661 000 024',
    whatsapp: '+212661000024',
    email: 'reservations@goldengrillberkane.ma',
    website: 'https://goldengrillberkane.ma',
    rating: 4.7,
    reviewsCount: 189,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$$',
    coordinates: { lat: 34.9239, lng: -2.3226 },
    socialLinks: {
      facebook: 'https://facebook.com/goldengrillberkane',
      instagram: 'https://instagram.com/goldengrillberkane',
      website: 'https://goldengrillberkane.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Tuesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Wednesday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Thursday', hours: '12:00 PM - 11:00 PM' },
      { day: 'Friday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Saturday', hours: '12:00 PM - 12:00 AM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 25,
    name: 'Café Jardin Berkane',
    logo: '🌿',
    image: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f50?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497551060073-4c5ab6435f50?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497551060073-4c5ab6435f50?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1497551060073-4c5ab6435f50?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cafés',
    city: 'Berkane',
    address: 'Rue du Parc 2, Berkane 60000',
    description: 'Popular café with garden seating, quality coffee, smoothies, and a bright atmosphere for meetings and remote work.',
    phone: '+212 661 000 025',
    whatsapp: '+212661000025',
    email: 'team@cafejardinberkane.ma',
    website: 'https://cafejardinberkane.ma',
    rating: 4.6,
    reviewsCount: 145,
    verified: false,
    open: true,
    featured: false,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.9180, lng: -2.3208 },
    socialLinks: {
      facebook: 'https://facebook.com/cafejardinberkane',
      instagram: 'https://instagram.com/cafejardinberkane',
      website: 'https://cafejardinberkane.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '7:30 AM - 10:00 PM' },
      { day: 'Tuesday', hours: '7:30 AM - 10:00 PM' },
      { day: 'Wednesday', hours: '7:30 AM - 10:00 PM' },
      { day: 'Thursday', hours: '7:30 AM - 10:00 PM' },
      { day: 'Friday', hours: '7:30 AM - 11:00 PM' },
      { day: 'Saturday', hours: '7:30 AM - 11:00 PM' },
      { day: 'Sunday', hours: '8:00 AM - 9:00 PM' }
    ]
  },
  {
    id: 26,
    name: 'Berkane Camera Works',
    logo: '🎥',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Security Cameras',
    city: 'Berkane',
    address: 'Zone Industrielle 2, Berkane 60000',
    description: 'Security systems provider in Berkane, specializing in CCTV installation, smart sensors, and monitored alarm systems.',
    phone: '+212 661 000 026',
    whatsapp: '+212661000026',
    email: 'info@berkanecameraworks.ma',
    website: 'https://berkanecameraworks.ma',
    rating: 4.5,
    reviewsCount: 97,
    verified: true,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 34.9225, lng: -2.3142 },
    socialLinks: {
      facebook: 'https://facebook.com/berkanecameraworks',
      instagram: 'https://instagram.com/berkanecameraworks',
      website: 'https://berkanecameraworks.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 27,
    name: 'Express Delivery Berkane',
    logo: '🚀',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Delivery Services',
    city: 'Berkane',
    address: 'Avenue de la Gare 14, Berkane 60000',
    description: 'Fast last-mile delivery service covering Berkane and nearby towns with flexible pickup points and business-friendly pricing.',
    phone: '+212 661 000 027',
    whatsapp: '+212661000027',
    email: 'hello@expressdeliveryberkane.ma',
    website: 'https://expressdeliveryberkane.ma',
    rating: 4.4,
    reviewsCount: 112,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$',
    coordinates: { lat: 34.9178, lng: -2.3211 },
    socialLinks: {
      facebook: 'https://facebook.com/expressdeliveryberkane',
      instagram: 'https://instagram.com/expressdeliveryberkane',
      website: 'https://expressdeliveryberkane.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Thursday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
      { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Sunday', hours: '9:00 AM - 5:00 PM' }
    ]
  },
  {
    id: 28,
    name: 'CleanWave Berkane',
    logo: '🧽',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Cleaning Services',
    city: 'Berkane',
    address: 'Quartier Al Wafa 6, Berkane 60000',
    description: 'Commercial and residential cleaning specialists in Berkane with eco-friendly solutions and reliable teams.',
    phone: '+212 661 000 028',
    whatsapp: '+212661000028',
    email: 'service@cleanwaveberkane.ma',
    website: 'https://cleanwaveberkane.ma',
    rating: 4.7,
    reviewsCount: 120,
    verified: true,
    open: true,
    featured: true,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 34.9172, lng: -2.3193 },
    socialLinks: {
      facebook: 'https://facebook.com/cleanwaveberkane',
      instagram: 'https://instagram.com/cleanwaveberkane',
      website: 'https://cleanwaveberkane.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 29,
    name: 'Berkane Spark Electric',
    logo: '💡',
    image: 'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1512446811784-56a8a5237f47?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Electricians',
    city: 'Berkane',
    address: 'Avenue Oujda 15, Berkane 60000',
    description: 'Professional electrician service offering full home wiring, smart switch installation, and emergency electrical repairs.',
    phone: '+212 661 000 029',
    whatsapp: '+212661000029',
    email: 'contact@berkanesparkelectric.ma',
    website: 'https://berkanesparkelectric.ma',
    rating: 4.4,
    reviewsCount: 81,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$$',
    coordinates: { lat: 34.9189, lng: -2.3254 },
    socialLinks: {
      facebook: 'https://facebook.com/berkanesparkelectric',
      instagram: 'https://instagram.com/berkanesparkelectric',
      website: 'https://berkanesparkelectric.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:30 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 30,
    name: 'Berkane Flow Plumbing',
    logo: '🚰',
    image: 'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1580572165758-90e2690b03d1?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'Plumbing',
    city: 'Berkane',
    address: 'Rue Al Khansa 6, Berkane 60000',
    description: 'Reliable plumbing services in Berkane for emergency repair, pipe replacement, and bathroom upgrades.',
    phone: '+212 661 000 030',
    whatsapp: '+212661000030',
    email: 'support@berkaneplumbing.ma',
    website: 'https://berkaneplumbing.ma',
    rating: 4.3,
    reviewsCount: 73,
    verified: false,
    open: true,
    featured: false,
    popular: false,
    priceRange: '$',
    coordinates: { lat: 34.9194, lng: -2.3233 },
    socialLinks: {
      facebook: 'https://facebook.com/berkaneplumbing',
      instagram: 'https://instagram.com/berkaneplumbing',
      website: 'https://berkaneplumbing.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 31,
    name: 'Fes Digital Repair',
    logo: '🖥️',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'PC Repair',
    city: 'Fes',
    address: 'Rue Talaa Kebira 82, Fes 30000',
    description: 'Fes computer repair specialists with fast diagnostics, laptop upgrades, and home office support for students and professionals.',
    phone: '+212 535 000 031',
    whatsapp: '+212535000031',
    email: 'support@fesdigitalrepair.ma',
    website: 'https://fesdigitalrepair.ma',
    rating: 4.8,
    reviewsCount: 176,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.0209, lng: -5.0078 },
    socialLinks: {
      facebook: 'https://facebook.com/fesdigitalrepair',
      instagram: 'https://instagram.com/fesdigitalrepair',
      website: 'https://fesdigitalrepair.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  {
    id: 32,
    name: 'Fes Fiber Home',
    logo: '🌐',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=70',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=60'
    ],
    category: 'WiFi & Internet',
    city: 'Fes',
    address: 'Avenue Mohammed VI 33, Fes 30000',
    description: 'Fes WiFi experts for fiber installs, router tuning, and business-grade connectivity with fast on-site service.',
    phone: '+212 535 000 032',
    whatsapp: '+212535000032',
    email: 'info@fesfiberhome.ma',
    website: 'https://fesfiberhome.ma',
    rating: 4.7,
    reviewsCount: 157,
    verified: true,
    open: true,
    featured: true,
    popular: true,
    priceRange: '$$',
    coordinates: { lat: 34.0170, lng: -5.0058 },
    socialLinks: {
      facebook: 'https://facebook.com/fesfiberhome',
      instagram: 'https://instagram.com/fesfiberhome',
      website: 'https://fesfiberhome.ma'
    },
    openingHours: [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  }
];

export const featuredBusinesses = businesses.filter((business) => business.featured).slice(0, 20);

export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Bennani',
    review: 'This platform helped me find the best WiFi technician in Oujda in minutes. The booking was fast and the technician was professional.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Fatima Alaoui',
    review: 'Smart WiFi installation from the marketplace was smooth and reliable. I had stable internet all week after the first visit.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=43'
  },
  {
    name: 'Youssef Tazi',
    review: 'The search experience is excellent. I found a trusted phone repair shop near me and the review history made the choice easy.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=65'
  },
  {
    name: 'Sanaa El Idrissi',
    review: 'Great selection of restaurants and cafés in Fes. The platform feels modern and the local listings are very complete.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=14'
  },
  {
    name: 'Karim Mansouri',
    review: 'Found a reliable electrician in Casablanca. The business was verified, responded quickly, and completed the job on time.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=27'
  },
  {
    name: 'Imane Bouziane',
    review: 'Fast Delivery Oujda exceeded expectations. My package arrived ahead of schedule and the driver was courteous.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=18'
  },
  {
    name: 'Hicham Lahmar',
    review: 'The cleaning service recommended on the platform was excellent. My apartment looked brand new after the deep clean.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Meriem Ziani',
    review: 'Great marketplace for local services across Morocco. I trust it for quality providers in Rabat and beyond.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=52'
  }
];

export const cityPages: CityPage[] = [
  {
    city: 'Oujda',
    popularBusinesses: [1, 2, 3, 4, 5, 6],
    topCategories: ['PC Repair', 'WiFi & Internet', 'Restaurants', 'Electricians', 'Delivery Services'],
    featuredServices: ['Fast laptop repair', 'Fiber WiFi installs', 'Premium restaurant dining', 'Home electrician service'],
    description: 'Oujda city page highlights trusted local services, top-reviewed businesses, and popular service categories for every need.'
  },
  {
    city: 'Nador',
    popularBusinesses: [11, 12, 14, 15, 18],
    topCategories: ['Restaurants', 'Phone Repair', 'Cleaning Services', 'WiFi & Internet', 'Delivery Services'],
    featuredServices: ['Reliable courier delivery', 'Mobile phone repair', 'Professional home cleaning', 'Fast WiFi fix'],
    description: 'Nador business listings focus on coastal service providers, delivery options, and convenient home support from local experts.'
  },
  {
    city: 'Berkane',
    popularBusinesses: [23, 24, 28, 21, 22],
    topCategories: ['Car Mechanics', 'Restaurants', 'Cleaning Services', 'Phone Repair', 'Electricians'],
    featuredServices: ['Full auto service', 'Modern dining', 'Commercial cleaning', 'Smart home wiring'],
    description: 'Berkane page showcases trusted mechanics, restaurant favorites, and home services from certified local teams.'
  },
  {
    city: 'Fes',
    popularBusinesses: [31, 32],
    topCategories: ['PC Repair', 'WiFi & Internet', 'Restaurants', 'Cafés', 'Electricians'],
    featuredServices: ['Computer diagnostics', 'Fiber network setups', 'Gourmet Moroccan dining', 'Artisanal coffee spots'],
    description: 'Fes listings highlight historic city service providers, specialty cafes, and modern technology businesses for residents and visitors.'
  },
  {
    city: 'Casablanca',
    popularBusinesses: [41, 42, 43, 44, 45],
    topCategories: ['Car Mechanics', 'Graphic Design', 'Photography', 'Barbershops', 'Gyms'],
    featuredServices: ['Premium auto care', 'Creative branding services', 'Studio photography', 'Modern fitness centers'],
    description: 'Casablanca page brings startup energy to the marketplace with creative agencies, fitness studios, and pro mechanics.'
  }
];

export const userProfiles: UserProfile[] = [
  {
    id: 1,
    name: 'Yassin El Amrani',
    avatar: 'https://i.pravatar.cc/150?img=1',
    city: 'Oujda',
    favorites: [1, 4, 7],
    reviews: [
      { businessId: 1, rating: 5, comment: 'Excellent laptop repair service, honest price and quick turnaround.', date: '2025-07-19' },
      { businessId: 4, rating: 5, comment: 'Great restaurant with delicious tagine and attentive service.', date: '2025-05-12' }
    ]
  },
  {
    id: 2,
    name: 'Leila Hafidi',
    avatar: 'https://i.pravatar.cc/150?img=2',
    city: 'Nador',
    favorites: [12, 15, 18],
    reviews: [
      { businessId: 12, rating: 5, comment: 'Fast WiFi installation and great follow-up support.', date: '2025-08-08' },
      { businessId: 15, rating: 4, comment: 'Cozy café with excellent coffee and dessert options.', date: '2025-06-23' }
    ]
  },
  {
    id: 3,
    name: 'Safae Choukri',
    avatar: 'https://i.pravatar.cc/150?img=3',
    city: 'Berkane',
    favorites: [23, 25, 27],
    reviews: [
      { businessId: 23, rating: 5, comment: 'Trusted auto shop with transparent pricing and a friendly team.', date: '2025-09-01' }
    ]
  },
  {
    id: 4,
    name: 'Karim Bouzine',
    avatar: 'https://i.pravatar.cc/150?img=4',
    city: 'Fes',
    favorites: [31, 32, 34],
    reviews: [
      { businessId: 31, rating: 4, comment: 'Solid computer repair, just a bit longer than expected.', date: '2025-04-04' }
    ]
  },
  {
    id: 5,
    name: 'Mouna El Youssfi',
    avatar: 'https://i.pravatar.cc/150?img=5',
    city: 'Casablanca',
    favorites: [42, 44, 45],
    reviews: [
      { businessId: 45, rating: 5, comment: 'Friendly gym with modern equipment and good class schedule.', date: '2025-02-28' }
    ]
  },
  {
    id: 6,
    name: 'Hicham Zoubir',
    avatar: 'https://i.pravatar.cc/150?img=6',
    city: 'Rabat',
    favorites: [46, 47, 49],
    reviews: [
      { businessId: 46, rating: 4, comment: 'Good PC repair shop with helpful staff.', date: '2025-03-20' }
    ]
  },
  {
    id: 7,
    name: 'Nora Saidi',
    avatar: 'https://i.pravatar.cc/150?img=7',
    city: 'Rabat',
    favorites: [49, 50],
    reviews: [
      { businessId: 49, rating: 5, comment: 'Amazing restaurant experience with polite service.', date: '2025-01-15' }
    ]
  },
  {
    id: 8,
    name: 'Yassine Erraki',
    avatar: 'https://i.pravatar.cc/150?img=8',
    city: 'Casablanca',
    favorites: [41, 43],
    reviews: [
      { businessId: 43, rating: 5, comment: 'Professional photography studio with quick delivery of images.', date: '2025-08-18' }
    ]
  },
  {
    id: 9,
    name: 'Sara Bouziane',
    avatar: 'https://i.pravatar.cc/150?img=9',
    city: 'Oujda',
    favorites: [5, 6],
    reviews: [
      { businessId: 5, rating: 5, comment: 'Lovely café and excellent coffee.', date: '2025-07-14' }
    ]
  },
  {
    id: 10,
    name: 'Mohammed Najib',
    avatar: 'https://i.pravatar.cc/150?img=10',
    city: 'Nador',
    favorites: [14, 17],
    reviews: [
      { businessId: 14, rating: 5, comment: 'Great meal with generous portions and friendly staff.', date: '2025-09-05' }
    ]
  },
  {
    id: 11,
    name: 'Imane Ait Ben',
    avatar: 'https://i.pravatar.cc/150?img=11',
    city: 'Fes',
    favorites: [34, 38],
    reviews: [
      { businessId: 38, rating: 5, comment: 'Exceptional cleaning team and reliable booking.', date: '2025-10-01' }
    ]
  },
  {
    id: 12,
    name: 'Hussein El Khattabi',
    avatar: 'https://i.pravatar.cc/150?img=12',
    city: 'Oujda',
    favorites: [2, 9],
    reviews: [
      { businessId: 9, rating: 4, comment: 'Electrician arrived on time and solved the issue professionally.', date: '2025-06-11' }
    ]
  },
  {
    id: 13,
    name: 'Rania Idrissi',
    avatar: 'https://i.pravatar.cc/150?img=13',
    city: 'Rabat',
    favorites: [44, 52],
    reviews: [
      { businessId: 44, rating: 5, comment: 'Stylish barbershop with great cuts and excellent service.', date: '2025-08-22' }
    ]
  },
  {
    id: 14,
    name: 'Omar El Mehdi',
    avatar: 'https://i.pravatar.cc/150?img=14',
    city: 'Casablanca',
    favorites: [42, 43, 45],
    reviews: [
      { businessId: 42, rating: 5, comment: 'Creative design agency that helped us refresh our brand identity.', date: '2025-03-14' }
    ]
  },
  {
    id: 15,
    name: 'Khadija Allali',
    avatar: 'https://i.pravatar.cc/150?img=15',
    city: 'Fes',
    favorites: [31, 35],
    reviews: [
      { businessId: 35, rating: 5, comment: 'Nice café with a calm ambiance and tasty light meals.', date: '2025-05-09' }
    ]
  },
  {
    id: 16,
    name: 'Said Benchrif',
    avatar: 'https://i.pravatar.cc/150?img=16',
    city: 'Nador',
    favorites: [11, 15],
    reviews: [
      { businessId: 11, rating: 5, comment: 'Professional PC repair with clear communication and fast delivery.', date: '2025-02-18' }
    ]
  },
  {
    id: 17,
    name: 'Amina Farah',
    avatar: 'https://i.pravatar.cc/150?img=17',
    city: 'Berkane',
    favorites: [24, 28],
    reviews: [
      { businessId: 28, rating: 5, comment: 'Excellent cleaning team and flexible scheduling for my small office.', date: '2025-11-02' }
    ]
  },
  {
    id: 18,
    name: 'Zineb El Hajj',
    avatar: 'https://i.pravatar.cc/150?img=18',
    city: 'Casablanca',
    favorites: [44, 45],
    reviews: [
      { businessId: 45, rating: 5, comment: 'I love the gym classes and the trainers are very motivating.', date: '2025-07-30' }
    ]
  },
  {
    id: 19,
    name: 'Mouad Kharraz',
    avatar: 'https://i.pravatar.cc/150?img=19',
    city: 'Rabat',
    favorites: [47, 50],
    reviews: [
      { businessId: 47, rating: 5, comment: 'Reliable internet service with a professional technician.', date: '2025-09-25' }
    ]
  },
  {
    id: 20,
    name: 'Nadia El Idrissi',
    avatar: 'https://i.pravatar.cc/150?img=20',
    city: 'Oujda',
    favorites: [8, 6, 4],
    reviews: [
      { businessId: 8, rating: 5, comment: 'Booked a cleaning service easily and they did a fantastic job.', date: '2025-01-30' }
    ]
  }
];

export const reviews: Review[] = [
  { id: 1, businessId: 1, userName: 'Hassan El Yacoubi', rating: 5, comment: 'Fast service and very professional staff. Fixed my laptop in one day.', date: '2025-09-16' },
  { id: 2, businessId: 1, userName: 'Meryem Lahlimi', rating: 5, comment: 'Excellent repair work and transparent pricing. I trust them with all my devices.', date: '2025-09-10' },
  { id: 3, businessId: 2, userName: 'Nabil Ouch', rating: 4, comment: 'WiFi setup was solid and the signal strength improved across the house.', date: '2025-09-12' },
  { id: 4, businessId: 2, userName: 'Salma Karimi', rating: 5, comment: 'Quick installation and good customer support after the job.', date: '2025-08-29' },
  { id: 5, businessId: 3, userName: 'Omar Souiri', rating: 4, comment: 'Phone screen replacement was fast and parts felt high quality.', date: '2025-08-18' },
  { id: 6, businessId: 3, userName: 'Amina Benaissa', rating: 5, comment: 'Very helpful team and the phone works perfectly now.', date: '2025-08-09' },
  { id: 7, businessId: 4, userName: 'Imane Rhissassi', rating: 5, comment: 'Amazing food and elegant atmosphere. Great for dinner with friends.', date: '2025-08-21' },
  { id: 8, businessId: 4, userName: 'Youssef Akdim', rating: 5, comment: 'Authentic Moroccan flavors with a modern twist. Highly recommended.', date: '2025-08-02' },
  { id: 9, businessId: 5, userName: 'Sara Belkacem', rating: 5, comment: 'My favorite café in Oujda. Great coffee and comfortable workspace.', date: '2025-07-25' },
  { id: 10, businessId: 5, userName: 'Karim Sellam', rating: 4, comment: 'Nice pastries and friendly staff. Perfect for a casual meeting.', date: '2025-07-16' },
  { id: 11, businessId: 6, userName: 'Rachid Tlemcani', rating: 4, comment: 'Security cameras installed with care. The follow-up support was appreciated.', date: '2025-07-10' },
  { id: 12, businessId: 6, userName: 'Salwa Zoubida', rating: 5, comment: 'Professional installation and remote monitoring works flawlessly.', date: '2025-06-25' },
  { id: 13, businessId: 7, userName: 'Ilyas Benhachem', rating: 5, comment: 'Delivery arrived faster than expected and the driver was friendly.', date: '2025-06-18' },
  { id: 14, businessId: 7, userName: 'Nora Filali', rating: 4, comment: 'Good service, but they were slightly late on one order.', date: '2025-06-10' },
  { id: 15, businessId: 8, userName: 'Abdelhak Saadi', rating: 5, comment: 'The home cleaning team was punctual and thorough. Great value for money.', date: '2025-06-04' },
  { id: 16, businessId: 8, userName: 'Meriem Tazi', rating: 5, comment: 'Highly professional cleaning service. My apartment looked spotless.', date: '2025-05-29' },
  { id: 17, businessId: 9, userName: 'Yassin Khattabi', rating: 4, comment: 'Electrician fixed the short circuit quickly and explained the issue clearly.', date: '2025-05-20' },
  { id: 18, businessId: 9, userName: 'Laila Zerouali', rating: 5, comment: 'Great installation service for new lighting in my living room.', date: '2025-05-12' },
  { id: 19, businessId: 10, userName: 'Othmane El Yafi', rating: 4, comment: 'Good plumbing work with a fast response to my emergency call.', date: '2025-05-02' },
  { id: 20, businessId: 10, userName: 'Rania Bennani', rating: 5, comment: 'Friendly plumber and the leak was fixed without hassle.', date: '2025-04-27' },
  { id: 21, businessId: 11, userName: 'Fatima Chami', rating: 5, comment: 'Nador fix center had my laptop ready on the same day.', date: '2025-04-18' },
  { id: 22, businessId: 11, userName: 'Bilal Hamdoun', rating: 4, comment: 'Good service, the repair took a little longer than planned.', date: '2025-04-10' },
  { id: 23, businessId: 12, userName: 'Nadia Touitou', rating: 5, comment: 'Fiber setup made a huge difference for remote working at home.', date: '2025-04-03' },
  { id: 24, businessId: 12, userName: 'Mehdi Akhss', rating: 4, comment: 'Great team and good follow-up support.', date: '2025-03-28' },
  { id: 25, businessId: 13, userName: 'Souad Saidi', rating: 5, comment: 'Fast phone repair and attentive staff. They replaced my screen perfectly.', date: '2025-03-19' },
  { id: 26, businessId: 13, userName: 'Yassine Hadid', rating: 5, comment: 'Excellent experience and competitive pricing for a quick fix.', date: '2025-03-10' },
  { id: 27, businessId: 14, userName: 'Nour El Ouazzani', rating: 4, comment: 'Fresh dishes and nice seaside ambiance.', date: '2025-03-02' },
  { id: 28, businessId: 14, userName: 'Oussama El Amri', rating: 5, comment: 'Delicious fish dishes and friendly team. Great local restaurant.', date: '2025-02-25' },
  { id: 29, businessId: 15, userName: 'Sanaa Ezzahra', rating: 5, comment: 'Lovely café for a quiet afternoon and excellent coffee.', date: '2025-02-18' },
  { id: 30, businessId: 15, userName: 'Hicham Belghazi', rating: 4, comment: 'Nice vibe and good pastries, perfect for casual meetings.', date: '2025-02-09' },
  { id: 31, businessId: 16, userName: 'Lina Tamazirt', rating: 5, comment: 'CCTV installation was done professionally and quickly.', date: '2025-02-01' },
  { id: 32, businessId: 16, userName: 'Walid Abidine', rating: 4, comment: 'Good security camera setup and clear instructions.', date: '2025-01-24' },
  { id: 33, businessId: 17, userName: 'Rania El Halabi', rating: 5, comment: 'My package arrived on time and the process was easy.', date: '2025-01-18' },
  { id: 34, businessId: 17, userName: 'Youssef Benchrif', rating: 4, comment: 'Convenient delivery with good communication.', date: '2025-01-11' },
  { id: 35, businessId: 18, userName: 'Samira Toumi', rating: 5, comment: 'Deep cleaning was thorough and the team was polite.', date: '2025-01-05' },
  { id: 36, businessId: 18, userName: 'Khadija Bennis', rating: 5, comment: 'Excellent cleaning crew and friendly scheduling process.', date: '2024-12-29' },
  { id: 37, businessId: 19, userName: 'Mistafa Hmida', rating: 4, comment: 'Electric repair with clear explanation and good finishing.', date: '2024-12-20' },
  { id: 38, businessId: 19, userName: 'Salma Mounir', rating: 4, comment: 'Affordable electrician with reliable service.', date: '2024-12-12' },
  { id: 39, businessId: 20, userName: 'Imane Rabie', rating: 5, comment: 'Plumbing team solved a difficult leak quickly.', date: '2024-12-03' },
  { id: 40, businessId: 20, userName: 'Aissa Choukri', rating: 4, comment: 'Good value and friendly plumber.', date: '2024-11-25' },
  { id: 41, businessId: 21, userName: 'Youssef Raqi', rating: 5, comment: 'Excellent phone repair service in Berkane.', date: '2024-11-19' },
  { id: 42, businessId: 21, userName: 'Zineb Messaoud', rating: 4, comment: 'Fast and efficient service with good customer care.', date: '2024-11-10' },
  { id: 43, businessId: 22, userName: 'Saad El Hali', rating: 5, comment: 'Network installation was seamless and reliable.', date: '2024-11-01' },
  { id: 44, businessId: 22, userName: 'Nadia Benslimane', rating: 4, comment: 'Great support and solid internet speeds.', date: '2024-10-27' },
  { id: 45, businessId: 23, userName: 'Hassan Ouchene', rating: 5, comment: 'Honest auto shop, fixed my car on the same day.', date: '2024-10-20' },
  { id: 46, businessId: 23, userName: 'Meriem Zoubir', rating: 5, comment: 'Reliable mechanics with transparent pricing.', date: '2024-10-12' },
  { id: 47, businessId: 24, userName: 'Amina Boushaba', rating: 5, comment: 'Lovely dinner experience and friendly team.', date: '2024-10-05' },
  { id: 48, businessId: 24, userName: 'Karim El Ghaoui', rating: 4, comment: 'Good food and pleasant atmosphere.', date: '2024-09-27' },
  { id: 49, businessId: 25, userName: 'Sofia Bennani', rating: 5, comment: 'Excellent café with a beautiful garden setting.', date: '2024-09-20' },
  { id: 50, businessId: 25, userName: 'Anas El Khattabi', rating: 4, comment: 'Nice coffee and calm place to work.', date: '2024-09-11' },
  { id: 51, businessId: 26, userName: 'Imane Boudlal', rating: 4, comment: 'Good security system advice and a clean installation.', date: '2024-09-02' },
  { id: 52, businessId: 26, userName: 'Younes Harrak', rating: 5, comment: 'Satisfied with CCTV installation and follow-up support.', date: '2024-08-25' },
  { id: 53, businessId: 27, userName: 'Nour Chahir', rating: 4, comment: 'Fast delivery and good driver communication.', date: '2024-08-17' },
  { id: 54, businessId: 27, userName: 'Mouad Abderrahim', rating: 4, comment: 'Good service for local delivery.', date: '2024-08-10' },
  { id: 55, businessId: 28, userName: 'Jihane Idrissi', rating: 5, comment: 'My home is much cleaner after their team visited.', date: '2024-08-02' },
  { id: 56, businessId: 28, userName: 'Adil Taoufiq', rating: 4, comment: 'Excellent cleaning service and easy booking.', date: '2024-07-26' },
  { id: 57, businessId: 29, userName: 'Hana Sefrioui', rating: 4, comment: 'Electrician resolved the problem quickly and safely.', date: '2024-07-18' },
  { id: 58, businessId: 29, userName: 'Youssef El Amri', rating: 5, comment: 'Helpful and professional electrician, good value.', date: '2024-07-10' },
  { id: 59, businessId: 30, userName: 'Nadia Ouarzazi', rating: 5, comment: 'Plumbing repair was completed on time and cleanly.', date: '2024-07-02' },
  { id: 60, businessId: 30, userName: 'Karim El Fihri', rating: 4, comment: 'Good plumbing service with polite staff.', date: '2024-06-24' },
  { id: 61, businessId: 31, userName: 'Mariam El Mezouari', rating: 5, comment: 'Great computer repair service in Fes with helpful technicians.', date: '2024-06-15' },
  { id: 62, businessId: 31, userName: 'Othmane Bennani', rating: 4, comment: 'Quality repair and good communication.', date: '2024-06-05' },
  { id: 63, businessId: 32, userName: 'Sara Khadiri', rating: 5, comment: 'WiFi performance improved dramatically after the installation.', date: '2024-05-28' },
  { id: 64, businessId: 32, userName: 'Oussama Rami', rating: 4, comment: 'Fast setup with reliable coverage across the apartment.', date: '2024-05-19' },
  { id: 65, businessId: 33, userName: 'Lina El Bakri', rating: 5, comment: 'Phone repair was done professionally and at a fair price.', date: '2024-05-12' },
  { id: 66, businessId: 33, userName: 'Hakim Bouaoua', rating: 4, comment: 'Quick service and nice staff.', date: '2024-05-04' },
  { id: 67, businessId: 34, userName: 'Nadia El Kadi', rating: 5, comment: 'Tasty Moroccan dishes in a beautiful Medina restaurant.', date: '2024-04-28' },
  { id: 68, businessId: 34, userName: 'Yassine Alami', rating: 4, comment: 'Good food and warm atmosphere.', date: '2024-04-20' },
  { id: 69, businessId: 35, userName: 'Rachida Bouziane', rating: 5, comment: 'Beautiful café with relaxed seating and great espresso.', date: '2024-04-12' },
  { id: 70, businessId: 35, userName: 'Anas Joy', rating: 4, comment: 'Nice place for a coffee break while walking through the city.', date: '2024-04-05' },
  { id: 71, businessId: 36, userName: 'Fouad Errouhi', rating: 4, comment: 'Strong security camera options and good installation.', date: '2024-03-29' },
  { id: 72, businessId: 36, userName: 'Sara Fassi', rating: 5, comment: 'Helpful team and strong surveillance setup.', date: '2024-03-21' },
  { id: 73, businessId: 37, userName: 'Mohammed Bennis', rating: 4, comment: 'Delivery service is fast and convenient.', date: '2024-03-14' },
  { id: 74, businessId: 37, userName: 'Hanan Khidri', rating: 5, comment: 'Excellent courier with friendly delivery staff.', date: '2024-03-08' },
  { id: 75, businessId: 38, userName: 'Abdelali Saghir', rating: 5, comment: 'Very good cleaning service for our office.', date: '2024-03-01' },
  { id: 76, businessId: 38, userName: 'Nora Jbali', rating: 4, comment: 'Professional and thorough clean.', date: '2024-02-22' },
  { id: 77, businessId: 39, userName: 'Amine Kabbaj', rating: 4, comment: 'Electrical repair went smoothly and quickly.', date: '2024-02-14' },
  { id: 78, businessId: 39, userName: 'Meryem El Harrak', rating: 5, comment: 'Great electrician service for my apartment.', date: '2024-02-06' },
  { id: 79, businessId: 40, userName: 'Youssef El Filali', rating: 5, comment: 'Plumbing issue fixed properly and cleanly.', date: '2024-01-29' },
  { id: 80, businessId: 40, userName: 'Leila Tazi', rating: 4, comment: 'Friendly plumber with good work ethic.', date: '2024-01-22' },
  { id: 81, businessId: 41, userName: 'Ibrahim Matbouli', rating: 5, comment: 'Great auto service in Casablanca. They fixed my brake issue quickly.', date: '2024-01-15' },
  { id: 82, businessId: 41, userName: 'Nadia El Aoufir', rating: 4, comment: 'Good mechanic with fair pricing.', date: '2024-01-08' },
  { id: 83, businessId: 42, userName: 'Sara Mahjoub', rating: 5, comment: 'Graphic design team produced excellent branding for my café.', date: '2024-01-02' },
  { id: 84, businessId: 42, userName: 'Ghita Aouachria', rating: 4, comment: 'Very creative and responsive designers.', date: '2023-12-20' },
  { id: 85, businessId: 43, userName: 'Rachid El Maliki', rating: 5, comment: 'Professional photography studio with beautiful results.', date: '2023-12-14' },
  { id: 86, businessId: 43, userName: 'Nawal Idrissi', rating: 4, comment: 'Quick photo delivery and great studio environment.', date: '2023-12-07' },
  { id: 87, businessId: 44, userName: 'Hassan El Fassi', rating: 5, comment: 'Excellent barber and modern haircut.', date: '2023-11-30' },
  { id: 88, businessId: 44, userName: 'Meriem Bouyoucef', rating: 4, comment: 'Great atmosphere and skilled barbers.', date: '2023-11-22' },
  { id: 89, businessId: 45, userName: 'Younes Lasri', rating: 5, comment: 'Excellent gym with helpful trainers and good classes.', date: '2023-11-15' },
  { id: 90, businessId: 45, userName: 'Nadia Lahbabi', rating: 4, comment: 'Modern equipment and welcoming staff.', date: '2023-11-08' },
  { id: 91, businessId: 46, userName: 'Samir Chafai', rating: 5, comment: 'Rabat computer repair shop fixed my PC quickly.', date: '2023-11-02' },
  { id: 92, businessId: 46, userName: 'Rania Badi', rating: 4, comment: 'Good service and friendly staff.', date: '2023-10-24' },
  { id: 93, businessId: 47, userName: 'Amine Mansouri', rating: 5, comment: 'Excellent WiFi service in Rabat. My connection is much stronger now.', date: '2023-10-18' },
  { id: 94, businessId: 47, userName: 'Hana Naji', rating: 4, comment: 'Quick setup and professional technician.', date: '2023-10-12' },
  { id: 95, businessId: 48, userName: 'Karim El Moutaouakil', rating: 5, comment: 'Phone repair with a fast turnaround and warranty.', date: '2023-10-05' },
  { id: 96, businessId: 48, userName: 'Laila Kihel', rating: 4, comment: 'Good support and nice repair quality.', date: '2023-09-28' },
  { id: 97, businessId: 49, userName: 'Safa Ouerghi', rating: 5, comment: 'Excellent restaurant with rich Moroccan flavors.', date: '2023-09-20' },
  { id: 98, businessId: 49, userName: 'Mourad El Houssaini', rating: 4, comment: 'Delicious food and comfortable dining experience.', date: '2023-09-12' },
  { id: 99, businessId: 50, userName: 'Imane Zerkout', rating: 5, comment: 'Reliable cleaning service in Rabat, professional and efficient.', date: '2023-09-05' },
  { id: 100, businessId: 50, userName: 'Walid Ghallab', rating: 4, comment: 'Good value cleaning service for my apartment.', date: '2023-08-29' }
];
