import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Scale, 
  FileText,
  Compass,
  Building
} from 'lucide-react';

const RoleOfSurveyorSlide = () => {
  const roles = [
    { icon: FileText, title: 'Lawyers', description: 'Handle documents & legal matters', color: 'blue' },
    { icon: Compass, title: 'Surveyors', description: 'Handle coordinates & measurements', color: 'green' }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-300',
    green: 'bg-green-500/20 text-green-300'
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
            Role of a Surveyor
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-yellow-300 mb-16 max-w-4xl mx-auto"
          >
            Different professionals, different responsibilities
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

          {/* Roles Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
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
                  <div className={`p-4 rounded-full ${colorClasses[role.color]}`}>
                    <role.icon className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {role.title}
                </h3>
                <p className="text-white/80 text-lg md:text-xl">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <Scale className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Confirm Land at Government Registry
                </h3>
              </div>
              <p className="text-white/80 text-lg">
                Always verify land ownership and boundaries with official records
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Take Your Own Survey
                </h3>
              </div>
              <p className="text-white/80 text-lg">
                Never rely solely on existing surveys. Get independent verification
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="text-xl md:text-2xl text-white/80 text-center max-w-4xl mx-auto"
          >
            Surveyors provide the technical foundation for all real estate transactions
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleOfSurveyorSlide;
