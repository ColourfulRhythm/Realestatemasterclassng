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
        backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Types of Buildings
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Understanding different property types
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Each building type offers different investment opportunities and returns
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {buildingTypes.map((building, index) => (
              <motion.div
                key={building.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                    <building.icon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{building.title}</h3>
                  <p className="text-white/70">{building.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TypesOfBuildingsSlide;

