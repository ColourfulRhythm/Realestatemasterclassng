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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Power of Location
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Location determines price & growth
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            The right location can make or break your investment
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-4">
            {locationFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full backdrop-blur-sm ${colorClasses[factor.color]}`}>
                    <factor.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-xl font-light mb-2">{factor.title}</h3>
                  <p className="text-white/70">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PowerOfLocationSlide;

