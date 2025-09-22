import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import './index.css';

// Import all slide components
import OpeningSlide from './components/OpeningSlide';
import WhatIsRealEstateSlide from './components/WhatIsRealEstateSlide';
import WhyRealEstateIsEverythingSlide from './components/WhyRealEstateIsEverythingSlide';
import GatewaysIntoRealEstateSlide from './components/GatewaysIntoRealEstateSlide';
import TypesOfBuildingsSlide from './components/TypesOfBuildingsSlide';
import PowerOfLocationSlide from './components/PowerOfLocationSlide';
import InvestmentStrategySlide from './components/InvestmentStrategySlide';
import CoOwnershipSlide from './components/CoOwnershipSlide';
import BreadthOfIndustrySlide from './components/BreadthOfIndustrySlide';
import LandFlippingSlide from './components/LandFlippingSlide';
import RoleOfSurveyorSlide from './components/RoleOfSurveyorSlide';
import BuyingFamilyLandSlide from './components/BuyingFamilyLandSlide';
import KeyDocumentsSlide from './components/KeyDocumentsSlide';
import SpecializedLandSlide from './components/SpecializedLandSlide';
import ClosingSlide from './components/ClosingSlide';

const slides = [
  { component: OpeningSlide, id: 'opening' },
  { component: WhatIsRealEstateSlide, id: 'what-is-real-estate' },
  { component: WhyRealEstateIsEverythingSlide, id: 'why-real-estate-is-everything' },
  { component: GatewaysIntoRealEstateSlide, id: 'gateways-into-real-estate' },
  { component: TypesOfBuildingsSlide, id: 'types-of-buildings' },
  { component: PowerOfLocationSlide, id: 'power-of-location' },
  { component: InvestmentStrategySlide, id: 'investment-strategy' },
  { component: CoOwnershipSlide, id: 'co-ownership' },
  { component: BreadthOfIndustrySlide, id: 'breadth-of-industry' },
  { component: LandFlippingSlide, id: 'land-flipping' },
  { component: RoleOfSurveyorSlide, id: 'role-of-surveyor' },
  { component: BuyingFamilyLandSlide, id: 'buying-family-land' },
  { component: KeyDocumentsSlide, id: 'key-documents' },
  { component: SpecializedLandSlide, id: 'specialized-land' },
  { component: ClosingSlide, id: 'closing' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="navigation-controls">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        
        <span className="text-white text-sm font-medium px-4">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-1 transition-all duration-200 ${
              index === currentSlide
                ? 'text-white scale-125'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Circle size={12} fill={index === currentSlide ? 'currentColor' : 'none'} />
          </button>
        ))}
      </div>

      {/* Keyboard Navigation */}
      <div
        className="fixed inset-0 z-0"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
        }}
        tabIndex={0}
      />
    </div>
  );
}

export default App;
