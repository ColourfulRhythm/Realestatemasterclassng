import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Users, MapPin } from 'lucide-react';

const CoverSlide = () => {
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
            by Tolulope Olugbode
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-blue-500/10 rounded-full backdrop-blur-sm">
                  <Building className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-xl font-light">Foundation</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-green-500/10 rounded-full backdrop-blur-sm">
                  <TrendingUp className="w-16 h-16 text-green-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-xl font-light">Wealth</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-purple-500/10 rounded-full backdrop-blur-sm">
                  <Users className="w-16 h-16 text-purple-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-xl font-light">Society</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                  <MapPin className="w-16 h-16 text-yellow-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-xl font-light">Location</h3>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="mt-12"
          >
            <div className="slide-content-text text-white/80">
              A Comprehensive Guide to Real Estate Investment
            </div>
            <div className="slide-content-text text-white/60">
              Masterclass Presentation
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverSlide;
