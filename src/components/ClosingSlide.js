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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Closing
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Real Estate = Fastest Tool for Leverage & Wealth
          </motion.div>

          {/* Central Door Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="p-8 bg-yellow-500/30 rounded-full backdrop-blur-sm">
              <DoorOpen className="w-16 h-16 text-yellow-300" />
            </div>
          </motion.div>

          {/* Key Points Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
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
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                    <point.icon className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-white/80 text-lg">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto border border-yellow-500/30"
          >
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <TrendingUp className="w-16 h-16 text-yellow-300" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Real Estate Mistakes are Costly but Avoidable
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                With proper knowledge, due diligence, and the right team, 
                real estate becomes your most powerful wealth-building tool.
              </p>
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                Start Your Real Estate Journey Today
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Thank you for learning about Real Estate: The Foundation of Wealth & Society
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClosingSlide;
