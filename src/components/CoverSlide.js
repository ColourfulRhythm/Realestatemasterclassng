import React from 'react';
import { motion } from 'framer-motion';

const CoverSlide = () => {
  return (
    <div className="presentation-slide">
      <div className="slide-background" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content flex flex-col justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-[10rem] font-thin text-white leading-none mb-12 tracking-tighter">
            Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-3xl font-extralight text-white/60 mb-32"
          >
            Masterclass
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-2xl font-light text-white/50"
          >
            Tolulope Olugbode
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverSlide;
