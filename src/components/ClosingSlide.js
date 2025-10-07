import React from 'react';
import { motion } from 'framer-motion';
import { 
  DoorOpen, 
  CheckCircle, 
  Users,
  AlertTriangle,
  TrendingUp,
  Shield
} from 'lucide-react';
import PDFDownload from './PDFDownload';

const ClosingSlide = () => {
  const keyPoints = [
    { icon: Users, title: 'Work with Right People', description: 'Choose experienced professionals' },
    { icon: CheckCircle, title: 'Verify All Documents', description: 'Never skip verification steps' },
    { icon: AlertTriangle, title: 'Don\'t Rush', description: 'Take time to make informed decisions' },
    { icon: Shield, title: 'Avoid Costly Mistakes', description: 'Prevention is better than cure' }
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
            Closing
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Real Estate = Fastest Tool for Leverage & Wealth
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Real Estate Mistakes are Costly but Avoidable
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-2">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className="p-6 bg-yellow-500/10 rounded-full backdrop-blur-sm">
                    <point.icon className="w-16 h-16 text-yellow-300" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{point.title}</h3>
                  <p className="text-white/70">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
            className="mt-8"
          >
            <div className="slide-content-text text-white">
              With proper knowledge, due diligence, and the right team, 
              real estate becomes your most powerful wealth-building tool.
            </div>
            <div className="slide-content-text text-yellow-300 font-semibold">
              Start Your Real Estate Journey Today
            </div>
            <div className="slide-content-text text-white/80">
              Thank you for learning about Real Estate: The Foundation of Wealth & Society
            </div>
          </motion.div>

          {/* PDF Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <PDFDownload />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClosingSlide;
