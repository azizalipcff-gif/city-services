import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, User, Plus } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const isLoggedIn = false; // Mock login state

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '#categories', icon: Search, label: 'Search' },
    { href: isLoggedIn ? '/dashboard' : '/login', icon: User, label: 'Profile' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.hash === href;
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#071126]/95 backdrop-blur-lg border-t border-white/10"
    >
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                active
                  ? 'text-[#d4af37] bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Quick Add Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center p-3 bg-[#d4af37] rounded-full text-[#071126] shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-200"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Safe area for iOS devices */}
      <div className="h-safe-area-inset-bottom bg-[#071126]" />
    </motion.div>
  );
};

export default BottomNav;