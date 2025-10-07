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
        backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80")'
      }} />
      <div className="slide-overlay" />
      
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Investment Strategy
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Buy before development → sell at maturity
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Like Stocks: Buy Low, Sell High
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-red-500/10 rounded-full backdrop-blur-sm">
                  <TrendingDown className="w-16 h-16 text-red-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-2xl font-light mb-2">Buy Low</h3>
                <p className="text-white/70">Purchase in developing areas before infrastructure is complete</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="icon-text-group"
            >
              <div className="icon-container">
                <div className="p-6 bg-green-500/10 rounded-full backdrop-blur-sm">
                  <TrendingUp className="w-16 h-16 text-green-300" />
                </div>
              </div>
              <div className="icon-text text-white">
                <h3 className="text-2xl font-light mb-2">Sell High</h3>
                <p className="text-white/70">Sell when the area matures and reaches full potential value</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
            className="mt-8"
          >
            <div className="slide-content-text text-white">
              Development → Maturity → Peak Value
            </div>
            <div className="slide-content-text text-white/80">
              Patience and timing are key to successful real estate investment
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentStrategySlide;

