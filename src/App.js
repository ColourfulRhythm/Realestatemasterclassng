import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Import custom hooks
import {
  useKeyboardNavigation,
  useSwipeGestures,
  useSlideHistory,
  useFullscreen,
} from './hooks';

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import NavigationControls from './components/NavigationControls';
import SlideIndicators from './components/SlideIndicators';
import KeyboardShortcutsHelper from './components/KeyboardShortcutsHelper';

// Import all slide components
import CoverSlide from './components/CoverSlide';
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

// Constants
const ANIMATION_DURATION = 0.5;
const SLIDE_OFFSET = 50;

// Define slide data
const slides = [
  { component: CoverSlide, id: 'cover', title: 'Cover' },
  { component: OpeningSlide, id: 'opening', title: 'Opening' },
  { component: WhatIsRealEstateSlide, id: 'what-is-real-estate', title: 'What is Real Estate' },
  { component: WhyRealEstateIsEverythingSlide, id: 'why-real-estate-is-everything', title: 'Why Real Estate is Everything' },
  { component: GatewaysIntoRealEstateSlide, id: 'gateways-into-real-estate', title: 'Gateways into Real Estate' },
  { component: TypesOfBuildingsSlide, id: 'types-of-buildings', title: 'Types of Buildings' },
  { component: PowerOfLocationSlide, id: 'power-of-location', title: 'Power of Location' },
  { component: InvestmentStrategySlide, id: 'investment-strategy', title: 'Investment Strategy' },
  { component: CoOwnershipSlide, id: 'co-ownership', title: 'Co-Ownership' },
  { component: BreadthOfIndustrySlide, id: 'breadth-of-industry', title: 'Breadth of Industry' },
  { component: LandFlippingSlide, id: 'land-flipping', title: 'Land Flipping' },
  { component: RoleOfSurveyorSlide, id: 'role-of-surveyor', title: 'Role of Surveyor' },
  { component: BuyingFamilyLandSlide, id: 'buying-family-land', title: 'Buying Family Land' },
  { component: KeyDocumentsSlide, id: 'key-documents', title: 'Key Documents' },
  { component: SpecializedLandSlide, id: 'specialized-land', title: 'Specialized Land' },
  { component: ClosingSlide, id: 'closing', title: 'Closing' },
];

const totalSlides = slides.length;

function App() {
  // State management
  const [currentSlide, setCurrentSlide] = useSlideHistory(slides);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isAnimating, setIsAnimating] = useState(false);
  
  const containerRef = useRef(null);

  // Fullscreen hook
  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);

  // Navigation helper
  const animateTransition = useCallback((newIndex, dir) => {
    if (isAnimating || newIndex === currentSlide) return;
    
    setDirection(dir);
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION * 1000);
  }, [currentSlide, isAnimating, setCurrentSlide]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      animateTransition(currentSlide + 1, 1);
    }
  }, [currentSlide, animateTransition]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      animateTransition(currentSlide - 1, -1);
    }
  }, [currentSlide, animateTransition]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      animateTransition(index, index > currentSlide ? 1 : -1);
    }
  }, [currentSlide, animateTransition]);

  const goToFirstSlide = useCallback(() => {
    goToSlide(0);
  }, [goToSlide]);

  const goToLastSlide = useCallback(() => {
    goToSlide(totalSlides - 1);
  }, [goToSlide]);

  // Keyboard navigation hook
  useKeyboardNavigation({
    onNext: nextSlide,
    onPrev: prevSlide,
    onFirst: goToFirstSlide,
    onLast: goToLastSlide,
    onGoToSlide: goToSlide,
    onToggleFullscreen: toggleFullscreen,
  });

  // Swipe gestures hook
  const swipeHandlers = useSwipeGestures({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div 
      ref={containerRef}
      {...swipeHandlers}
      className="presentation-container relative min-h-screen bg-gray-900 focus:outline-none overflow-hidden"
      role="region"
      aria-roledescription="presentation"
      aria-label="Real Estate Presentation"
      aria-live="polite"
    >
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, x: SLIDE_OFFSET * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -SLIDE_OFFSET * direction }}
            transition={{ 
              duration: ANIMATION_DURATION, 
              ease: "easeInOut" 
            }}
            className="slide-content w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </ErrorBoundary>

      {/* Navigation Controls */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        isAnimating={isAnimating}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Slide Indicators */}
      <SlideIndicators
        slides={slides}
        currentSlide={currentSlide}
        onGoToSlide={goToSlide}
        isAnimating={isAnimating}
      />

      {/* Keyboard Shortcuts Helper */}
      <KeyboardShortcutsHelper />
    </div>
  );
}

export default App;
