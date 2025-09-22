import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  MapPin,
  Shield,
  Building,
  FileCheck
} from 'lucide-react';

const KeyDocumentsSlide = () => {
  const documents = [
    { icon: MapPin, title: 'Registered Survey', description: 'Official land measurements', color: 'blue' },
    { icon: FileText, title: 'Deed of Assignment', description: 'Transfer of ownership', color: 'green' },
    { icon: Shield, title: 'C of O', description: 'Certificate of Occupancy (verify at Lands Registry)', color: 'yellow' },
    { icon: Building, title: 'Governor\'s Consent', description: 'State approval for transfer', color: 'purple' },
    { icon: FileCheck, title: 'Layout Plan Approval', description: 'Development plan approval', color: 'red' }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-300',
    green: 'bg-green-500/20 text-green-300',
    yellow: 'bg-yellow-500/20 text-yellow-300',
    purple: 'bg-purple-500/20 text-purple-300',
    red: 'bg-red-500/20 text-red-300'
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
            Key Documents
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Essential paperwork for every transaction
          </motion.div>

          {/* Central Checklist Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Documents Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full ${colorClasses[doc.color]}`}>
                    <doc.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
                  {doc.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base text-center">
                  {doc.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Verification Warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-orange-500/30"
          >
            <div className="flex items-center justify-center mb-4">
              <FileCheck className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-orange-300">
                Always Verify
              </h3>
            </div>
            <p className="text-white/90 text-lg md:text-xl text-center">
              Never accept documents at face value. Always verify authenticity with relevant government agencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Missing or invalid documents can invalidate your entire investment
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyDocumentsSlide;
