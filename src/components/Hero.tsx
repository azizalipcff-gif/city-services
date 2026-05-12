import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp, Building, ArrowRight } from 'lucide-react';
import { trendingSearches } from '../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#071126] to-[#0a1a2e] text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37] opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#d4af37] opacity-5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#d4af37] opacity-5 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Find Trusted Local Services In Your City
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Discover the best technicians, restaurants, WiFi services, electricians, repair shops, and local businesses near you.
        </motion.p>

        {/* Enhanced Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Search Services */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g., PC Repair)"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                />
              </div>

              {/* Search City */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter city (e.g., Oujda)"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                />
              </div>

              {/* Search Button */}
              <button className="bg-[#d4af37] text-[#071126] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8941f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#d4af37]/25">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg text-white hover:bg-[#d4af37] hover:text-[#071126] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Building className="w-5 h-5" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4af37] text-[#071126] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8941f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#d4af37]/25"
              >
                <TrendingUp className="w-5 h-5" />
                Add Your Business
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">500+</div>
            <div className="text-gray-300">Businesses</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">1,200+</div>
            <div className="text-gray-300">Happy Users</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">50+</div>
            <div className="text-gray-300">Categories</div>
          </div>
        </motion.div>

        {/* Trending Searches */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Trending Searches</h3>
                <p className="text-gray-400">Popular searches from local users across Morocco.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div className="flex flex-wrap gap-3">
              {trendingSearches.map((search) => (
                <span key={search} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/10">
                  {search}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#d4af37] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;