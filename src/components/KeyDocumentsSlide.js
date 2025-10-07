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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Key Documents
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Essential paperwork for every transaction
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Missing or invalid documents can invalidate your entire investment
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-3">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full backdrop-blur-sm ${colorClasses[doc.color]}`}>
                    <doc.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-xl font-light mb-2">{doc.title}</h3>
                  <p className="text-white/70">{doc.description}</p>
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
              Never accept documents at face value. Always verify authenticity with relevant government agencies.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyDocumentsSlide;
