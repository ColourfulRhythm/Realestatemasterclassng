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
            Gateways into Real Estate
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Multiple pathways to enter the industry
          </motion.div>

          {/* Central Door Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <DoorOpen className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Gateways Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {gateways.map((gateway, index) => (
              <motion.div
                key={gateway.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-yellow-500/20 rounded-full">
                    <gateway.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {gateway.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  {gateway.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Choose your path based on your skills, capital, and interests
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GatewaysIntoRealEstateSlide;
