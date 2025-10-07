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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            The Foundation of Wealth & Society
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Food. Clothing. Shelter → <span className="text-yellow-300 font-semibold">Shelter = Real Estate</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            <div className="icon-text-group">
              <div className="icon-container">
                <div className="p-6 bg-orange-500/10 rounded-full backdrop-blur-sm">
                  <Utensils className="w-16 h-16 text-orange-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-2xl font-light mb-2">Food</h3>
                <p className="text-white/70">Basic human need</p>
              </div>
            </div>
            
            <div className="icon-text-group">
              <div className="icon-container">
                <div className="p-6 bg-blue-500/10 rounded-full backdrop-blur-sm">
                  <Shirt className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-2xl font-light mb-2">Clothing</h3>
                <p className="text-white/70">Basic human need</p>
              </div>
            </div>
            
            <div className="icon-text-group">
              <div className="icon-container">
                <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                  <Home className="w-16 h-16 text-yellow-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-2xl font-light mb-2">Shelter</h3>
                <p className="text-white/70">Basic human need = Real Estate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpeningSlide;
