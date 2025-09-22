import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shirt, Utensils } from 'lucide-react';

const OpeningSlide = () => {
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
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl font-light text-yellow-300 mb-12"
          >
            The Foundation of Wealth & Society
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-4xl text-white/90 mb-16"
          >
            Food. Clothing. Shelter → <span className="text-yellow-300 font-semibold">Shelter = Real Estate</span>
          </motion.div>

          {/* Basic Needs Triangle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex justify-center items-center space-x-8 md:space-x-16"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-orange-500/20 rounded-full backdrop-blur-sm">
                <Utensils className="w-12 h-12 text-orange-300" />
              </div>
              <span className="text-white text-lg font-medium">Food</span>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-500/20 rounded-full backdrop-blur-sm">
                <Shirt className="w-12 h-12 text-blue-300" />
              </div>
              <span className="text-white text-lg font-medium">Clothing</span>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-yellow-500/20 rounded-full backdrop-blur-sm">
                <Home className="w-12 h-12 text-yellow-300" />
              </div>
              <span className="text-white text-lg font-medium">Shelter</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpeningSlide;
