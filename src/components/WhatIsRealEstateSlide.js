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
            What is Real Estate?
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Land + everything attached to it<br />
            <span className="text-white text-xl md:text-2xl">
              (Natural & Man-made)
            </span>
          </motion.div>

          {/* 4-Quadrant Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-yellow-500/20 rounded-full">
                    <category.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsRealEstateSlide;
