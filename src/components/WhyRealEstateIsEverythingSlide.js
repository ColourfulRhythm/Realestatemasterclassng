import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  Utensils, 
  Plane, 
  Truck, 
  Banknote, 
  Laptop,
  Building2
} from 'lucide-react';

const WhyRealEstateIsEverythingSlide = () => {
  const sectors = [
    { icon: Film, title: 'Entertainment & Culture', color: 'purple' },
    { icon: Utensils, title: 'Food & Agriculture', color: 'green' },
    { icon: Plane, title: 'Tourism & Hospitality', color: 'blue' },
    { icon: Truck, title: 'Logistics & Trade', color: 'orange' },
    { icon: Banknote, title: 'Banking & Finance', color: 'yellow' },
    { icon: Laptop, title: 'Technology', color: 'cyan' }
  ];

  const colorClasses = {
    purple: 'bg-purple-500/20 text-purple-300',
    green: 'bg-green-500/20 text-green-300',
    blue: 'bg-blue-500/20 text-blue-300',
    orange: 'bg-orange-500/20 text-orange-300',
    yellow: 'bg-yellow-500/20 text-yellow-300',
    cyan: 'bg-cyan-500/20 text-cyan-300'
  };

  return (
    <div className="presentation-slide">
      <div className="slide-background" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Why Real Estate is Everything
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Every sector depends on real estate
          </motion.div>

          {/* Central Real Estate Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <Building2 className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Sectors Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full ${colorClasses[sector.color]}`}>
                    <sector.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {sector.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Real estate is the foundation that enables all other industries to operate
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyRealEstateIsEverythingSlide;
