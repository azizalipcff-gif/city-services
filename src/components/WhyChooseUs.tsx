import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Trusted Businesses',
    description: 'All businesses are verified and trusted by the community.',
    icon: '✅'
  },
  {
    title: 'Fast Search',
    description: 'Find what you need in seconds with our advanced search.',
    icon: '⚡'
  },
  {
    title: 'Verified Services',
    description: 'Every service is verified for quality and reliability.',
    icon: '🛡️'
  },
  {
    title: 'Easy Contact',
    description: 'Direct WhatsApp contact with businesses.',
    icon: '📱'
  },
  {
    title: 'Local Only',
    description: 'Only businesses from your city for authentic local experience.',
    icon: '🏠'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#071126]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{advantage.title}</h3>
              <p className="text-gray-300 text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;