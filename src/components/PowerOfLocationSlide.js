import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  Eye,
  Map
} from 'lucide-react';

const PowerOfLocationSlide = () => {
  const locationFactors = [
    { icon: TrendingUp, title: 'Mature Areas', description: 'Established, stable prices', color: 'green' },
    { icon: TrendingDown, title: 'Developing Areas', description: 'Growth potential, lower prices', color: 'blue' },
    { icon: Eye, title: 'Watch Migration', description: 'Population movement patterns', color: 'yellow' },
    { icon: Map, title: 'Government Projects', description: 'Infrastructure development', color: 'purple' }
  ];

  const colorClasses = {
    green: 'bg-green-500/20 text-green-300',
    blue: 'bg-blue-500/20 text-blue-300',
    yellow: 'bg-yellow-500/20 text-yellow-300',
    purple: 'bg-purple-500/20 text-purple-300'
  };

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
            Power of Location
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Location determines price & growth
          </motion.div>

          {/* Central Map Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <MapPin className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Location Factors Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {locationFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
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
                  <div className={`p-4 rounded-full ${colorClasses[factor.color]}`}>
                    <factor.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {factor.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            The right location can make or break your investment
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PowerOfLocationSlide;
