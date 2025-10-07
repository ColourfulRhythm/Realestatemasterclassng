import React from 'react';
import { motion } from 'framer-motion';

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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-[8rem] font-extralight text-white leading-none mb-8 tracking-tight">
            Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-4xl font-light text-white/80 mb-16"
          >
            The Foundation of Everything
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-3xl font-extralight text-white/60 max-w-4xl mx-auto"
          >
            Food. Clothing. <span className="text-white">Shelter.</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpeningSlide;
