import React from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

/**
 * NavigationControls Component
 * Displays navigation buttons for slide presentation
 */
function NavigationControls({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  isAnimating,
  isFullscreen,
  onToggleFullscreen,
}) {
  return (
    <div className="navigation-controls">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0 || isAnimating}
        aria-label="Previous Slide"
        className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
      >
        <ChevronLeft size={24} />
      </button>
      
      <span className="text-white text-sm font-medium px-4 select-none">
        {currentSlide + 1} / {totalSlides}
      </span>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1 || isAnimating}
        aria-label="Next Slide"
        className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
      >
        <ChevronRight size={24} />
      </button>

      <button
        onClick={onToggleFullscreen}
        aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/50 ml-2"
        title="Press F for fullscreen"
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
    </div>
  );
}

export default NavigationControls;

