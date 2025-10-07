import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  Megaphone, 
  RotateCcw, 
  TrendingUp, 
  Key,
  DoorOpen
} from 'lucide-react';

const GatewaysIntoRealEstateSlide = () => {
  const gateways = [
    { icon: Hammer, title: 'Development', description: 'Build from scratch' },
    { icon: Megaphone, title: 'Sales & Marketing', description: 'Sell properties' },
    { icon: RotateCcw, title: 'Flipping', description: 'Buy, renovate, sell' },
    { icon: TrendingUp, title: 'Off-plan Investing', description: 'Buy before completion' },
    { icon: Key, title: 'Leasing', description: 'Rent out properties' }
  ];

  return (
    <div className="presentation-slide">
      <div className="slide-background" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Gateways into Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Multiple pathways to enter the industry
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Choose your path based on your skills, capital, and interests
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {gateways.map((gateway, index) => (
              <motion.div
                key={gateway.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                    <gateway.icon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{gateway.title}</h3>
                  <p className="text-white/70">{gateway.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GatewaysIntoRealEstateSlide;

