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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Breadth of the Industry
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Real estate touches every profession
          </motion.div>

          {/* Professions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {professions.map((profession, index) => (
              <motion.div
                key={profession.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full ${colorClasses[profession.color]}`}>
                    <profession.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {profession.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Countless career opportunities within the real estate ecosystem
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BreadthOfIndustrySlide;
