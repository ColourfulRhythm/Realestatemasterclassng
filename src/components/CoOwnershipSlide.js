import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  HandHeart, 
  TrendingUp,
  Puzzle
} from 'lucide-react';

const CoOwnershipSlide = () => {
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
            Co-Ownership & Sub-Ownership
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Shared sqm ownership lowers barriers
          </motion.div>

          {/* Central Puzzle Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <Puzzle className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.3,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <Users className="w-12 h-12 text-blue-300" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Lower Barriers
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Shared ownership makes real estate investment accessible to more people
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-500/20 rounded-full">
                <TrendingUp className="w-12 h-12 text-green-300" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bigger Opportunities
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                More people = bigger projects = higher returns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.7,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-500/20 rounded-full">
                  <HandHeart className="w-12 h-12 text-purple-300" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Shared Risk
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Risk is distributed among multiple investors
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Together, we can access opportunities that would be impossible individually
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoOwnershipSlide;
