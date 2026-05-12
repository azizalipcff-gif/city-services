import { motion } from 'framer-motion';
import {
  Monitor,
  Wifi,
  Smartphone,
  Utensils,
  Zap,
  Wrench,
  Car,
  Sparkles,
  Truck,
  Shield
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { categories } from '../data/mockData';

const categoryIcons: Record<string, LucideIcon> = {
  'PC Repair': Monitor,
  'WiFi & Internet': Wifi,
  'Phone Repair': Smartphone,
  Restaurants: Utensils,
  Electricians: Zap,
  Plumbing: Wrench,
  'Car Mechanics': Car,
  'Cleaning Services': Sparkles,
  'Delivery Services': Truck,
  'Security Cameras': Shield,
  'Cafés': Utensils,
  'Graphic Design': Monitor,
  Photography: Sparkles,
  Barbershops: Car,
  Gyms: Zap,
};

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-[#071126]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Popular Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Explore our wide range of service categories and find exactly what you're looking for
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.name] || Monitor;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)'
                }}
                className={`relative bg-gradient-to-br ${category.color} from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center cursor-pointer hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden group`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#d4af37]/30 transition-all duration-300" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#d4af37] group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                    {category.name}
                  </h3>

                  <div className="text-[#d4af37] text-sm font-medium">
                    {category.count} businesses
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;