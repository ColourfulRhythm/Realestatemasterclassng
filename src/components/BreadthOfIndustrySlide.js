import React from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Palette, 
  Building, 
  Ruler,
  MapPin,
  Wrench,
  Briefcase
} from 'lucide-react';

const BreadthOfIndustrySlide = () => {
  const professions = [
    { icon: TreePine, title: 'Landscaping', color: 'green' },
    { icon: Palette, title: 'Interior Design', color: 'purple' },
    { icon: Building, title: 'Architecture', color: 'blue' },
    { icon: Ruler, title: 'Structural Engineering', color: 'red' },
    { icon: MapPin, title: 'Quantity Surveying', color: 'yellow' },
    { icon: Wrench, title: 'Land Surveying', color: 'orange' },
    { icon: Briefcase, title: 'Facility Management', color: 'cyan' }
  ];

  const colorClasses = {
    green: 'bg-green-500/20 text-green-300',
    purple: 'bg-purple-500/20 text-purple-300',
    blue: 'bg-blue-500/20 text-blue-300',
    red: 'bg-red-500/20 text-red-300',
    yellow: 'bg-yellow-500/20 text-yellow-300',
    orange: 'bg-orange-500/20 text-orange-300',
    cyan: 'bg-cyan-500/20 text-cyan-300'
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
            Breadth of the Industry
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Real estate touches every profession
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Countless career opportunities within the real estate ecosystem
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-4">
            {professions.map((profession, index) => (
              <motion.div
                key={profession.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full backdrop-blur-sm ${colorClasses[profession.color]}`}>
                    <profession.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-xl font-light">{profession.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BreadthOfIndustrySlide;

