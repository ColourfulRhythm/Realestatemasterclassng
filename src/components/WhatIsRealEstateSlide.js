import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Building, Factory, Home } from 'lucide-react';

const WhatIsRealEstateSlide = () => {
  const categories = [
    { icon: TreePine, title: 'Land', description: 'Raw land & natural resources' },
    { icon: Home, title: 'Residential', description: 'Homes, apartments, condos' },
    { icon: Building, title: 'Commercial', description: 'Offices, retail, hotels' },
    { icon: Factory, title: 'Industrial', description: 'Warehouses, factories' }
  ];

  return (
    <div className="presentation-slide">
      <div className="slide-background" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            What is Real Estate?
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Land + everything attached to it
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            <span className="text-white/80">(Natural & Man-made)</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                    <category.icon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{category.title}</h3>
                  <p className="text-white/70">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsRealEstateSlide;

