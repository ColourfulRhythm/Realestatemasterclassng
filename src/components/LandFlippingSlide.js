import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  FileCheck, 
  MapPin,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const LandFlippingSlide = () => {
  const steps = [
    { icon: FileCheck, title: 'Check Documents', description: 'Verify with government' },
    { icon: MapPin, title: 'Check Zoning', description: 'Residential/Commercial/Agricultural' },
    { icon: CheckCircle, title: 'Verify Everything', description: 'Always do proper verification' }
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
            Land Flipping & Due Diligence
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Always verify before you buy
          </motion.div>

          {/* Warning Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-red-500/30"
          >
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-300 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-red-300">
                Critical Steps
              </h3>
            </div>
            <p className="text-white/90 text-lg md:text-xl text-center">
              Real estate mistakes are costly but avoidable with proper due diligence
            </p>
          </motion.div>

          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-yellow-500/20 rounded-full">
                      <step.icon className="w-12 h-12 text-yellow-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2"
                  >
                    <ArrowRight className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Check → Verify → Buy. Never skip these steps.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandFlippingSlide;
