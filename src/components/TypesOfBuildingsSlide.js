import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Building2, 
  Layers,
  Warehouse,
  Castle
} from 'lucide-react';

const TypesOfBuildingsSlide = () => {
  const buildingTypes = [
    { icon: Home, title: 'Duplex', description: 'Two-story house' },
    { icon: Building, title: 'Bungalow', description: 'Single-story house' },
    { icon: Building2, title: 'Terraces', description: 'Row of connected houses' },
    { icon: Layers, title: 'Apartments', description: 'Multi-unit buildings' },
    { icon: Warehouse, title: 'Lofts', description: 'Converted industrial spaces' },
    { icon: Castle, title: 'Maisonette', description: 'Two-story apartment' }
  ];

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
            Types of Buildings
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Understanding different property types
          </motion.div>

          {/* Building Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {buildingTypes.map((building, index) => (
              <motion.div
                key={building.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-yellow-500/20 rounded-full">
                    <building.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {building.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  {building.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Each building type offers different investment opportunities and returns
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TypesOfBuildingsSlide;
