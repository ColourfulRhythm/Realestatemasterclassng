import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Camera, 
  FileText,
  HandHeart,
  AlertTriangle
} from 'lucide-react';

const BuyingFamilyLandSlide = () => {
  const steps = [
    { icon: Users, title: 'Meet All Members', description: 'Confirm no disputes exist' },
    { icon: Camera, title: 'Take Photos & Videos', description: 'Document the signing process' },
    { icon: FileText, title: 'Register Deed', description: 'File immediately with authorities' }
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
            Buying Family Land
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Extra precautions for family transactions
          </motion.div>

          {/* Warning Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-orange-500/30"
          >
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-orange-300">
                Family Land = Higher Risk
              </h3>
            </div>
            <p className="text-white/90 text-lg md:text-xl text-center">
              Family disputes can invalidate land sales. Take extra care with documentation.
            </p>
          </motion.div>

          {/* Central Handshake Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <HandHeart className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
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
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-red-500/20"
          >
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-2">
                ⚠️ Critical Reminder
              </h3>
              <p className="text-white/90 text-lg md:text-xl">
                Family land disputes are common and can result in years of legal battles. 
                Always ensure all family members are present and in agreement before proceeding.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Documentation is your protection in family land transactions
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyingFamilyLandSlide;
