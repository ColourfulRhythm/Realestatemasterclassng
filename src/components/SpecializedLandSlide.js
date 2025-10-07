import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Wheat, 
  Building2,
  MapPin,
  FileText,
  AlertCircle
} from 'lucide-react';

const SpecializedLandSlide = () => {
  const landTypes = [
    { 
      icon: Waves, 
      title: 'Beachfront', 
      description: 'Coastal office verification', 
      color: 'blue',
      office: 'Coastal Office'
    },
    { 
      icon: Wheat, 
      title: 'Agricultural', 
      description: 'Agricultural zoning check', 
      color: 'green',
      office: 'Agricultural Zoning'
    },
    { 
      icon: Building2, 
      title: 'Urban', 
      description: 'Planning & zoning verification', 
      color: 'purple',
      office: 'Planning/Zoning Office'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-300',
    green: 'bg-green-500/20 text-green-300',
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
            Specialized Land
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Different land types require different verification
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Know the rules before you invest in specialized land
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {landTypes.map((land, index) => (
              <motion.div
                key={land.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full backdrop-blur-sm ${colorClasses[land.color]}`}>
                    <land.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{land.title}</h3>
                  <p className="text-white/70 mb-4">{land.description}</p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <FileText className="w-6 h-6 text-yellow-300 mr-2" />
                      <span className="text-yellow-300 font-semibold">Verify at:</span>
                    </div>
                    <p className="text-white/90 text-lg font-medium">
                      {land.office}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="mt-8"
          >
            <div className="slide-content-text text-white/80">
              Each land type has specific regulations and approval processes. 
              Always check with the appropriate government office before purchasing.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecializedLandSlide;
