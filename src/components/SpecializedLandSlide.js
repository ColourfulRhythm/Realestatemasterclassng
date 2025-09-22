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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Specialized Land
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Different land types require different verification
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

          {/* Land Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {landTypes.map((land, index) => (
              <motion.div
                key={land.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-full ${colorClasses[land.color]}`}>
                    <land.icon className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {land.title}
                </h3>
                <p className="text-white/80 text-lg md:text-xl mb-4">
                  {land.description}
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-yellow-300 mr-2" />
                    <span className="text-yellow-300 font-semibold">Verify at:</span>
                  </div>
                  <p className="text-white/90 text-lg font-medium">
                    {land.office}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-orange-500/30"
          >
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-orange-300">
                Specialized Requirements
              </h3>
            </div>
            <p className="text-white/90 text-lg md:text-xl text-center">
              Each land type has specific regulations and approval processes. 
              Always check with the appropriate government office before purchasing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Know the rules before you invest in specialized land
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecializedLandSlide;
