import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Camera, 
  FileText,
  Heart,
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Buying Family Land
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Extra precautions for family transactions
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Family Land = Higher Risk. Documentation is your protection in family land transactions
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                    <step.icon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
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
              Family land disputes are common and can result in years of legal battles. 
              Always ensure all family members are present and in agreement before proceeding.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyingFamilyLandSlide;
