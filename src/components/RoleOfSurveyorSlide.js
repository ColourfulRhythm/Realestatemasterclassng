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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="slide-title text-white">
            Role of a Surveyor
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="slide-subtitle text-yellow-300"
          >
            Different professionals, different responsibilities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="slide-content-text text-white"
          >
            Surveyors provide the technical foundation for all real estate transactions
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="content-section"
        >
          <div className="content-grid content-grid-2">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                className="icon-text-group"
              >
                <div className="icon-container">
                  <div className={`p-6 rounded-full backdrop-blur-sm ${colorClasses[role.color]}`}>
                    <role.icon className="w-16 h-16" />
                  </div>
                </div>
                <div className="icon-text text-white">
                  <h3 className="text-2xl font-light mb-2">{role.title}</h3>
                  <p className="text-white/70">{role.description}</p>
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
              Always verify land ownership and boundaries with official records
            </div>
            <div className="slide-content-text text-white/80">
              Never rely solely on existing surveys. Get independent verification
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleOfSurveyorSlide;
