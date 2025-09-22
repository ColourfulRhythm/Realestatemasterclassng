import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Target,
  BarChart3
} from 'lucide-react';

const InvestmentStrategySlide = () => {
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
            Investment Strategy
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Buy before development → sell at maturity
          </motion.div>

          {/* Strategy Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-500/20 rounded-full">
                  <TrendingDown className="w-12 h-12 text-red-300" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Buy Low
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Purchase in developing areas before infrastructure and amenities are complete
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-500/20 rounded-full">
                  <TrendingUp className="w-12 h-12 text-green-300" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Sell High
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Sell when the area matures and reaches its full potential value
              </p>
            </motion.div>
          </motion.div>

          {/* Appreciation Curve Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-yellow-500/20 rounded-full">
                <BarChart3 className="w-12 h-12 text-yellow-300" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Like Stocks: Buy Low, Sell High
            </h3>
            <div className="relative h-32 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-lg flex items-end justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
              </div>
              <div className="text-white text-sm font-medium mb-2">
                Development → Maturity → Peak Value
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Patience and timing are key to successful real estate investment
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentStrategySlide;
