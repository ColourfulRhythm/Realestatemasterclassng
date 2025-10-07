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
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Why Real Estate is Everything
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Every sector depends on real estate
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Real estate is the foundation that enables all other industries to operate
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full ${colorClasses[sector.color]}`}>
                    <sector.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-xl font-light">{sector.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyRealEstateIsEverythingSlide;

