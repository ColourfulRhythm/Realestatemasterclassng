import React from 'react';
import { Circle } from 'lucide-react';

/**
 * SlideIndicators Component
 * Displays slide indicator dots for navigation
 */
function SlideIndicators({ slides, currentSlide, onGoToSlide, isAnimating }) {
  return (
    <div className="slide-indicators">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => onGoToSlide(index)}
          disabled={isAnimating}
          aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          aria-current={index === currentSlide ? 'true' : 'false'}
          className={`p-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-full ${
            index === currentSlide
              ? 'text-white scale-110'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          <Circle 
            size={10}
            fill={index === currentSlide ? 'currentColor' : 'none'}
            strokeWidth={index === currentSlide ? 0 : 1.5}
          />
        </button>
      ))}
    </div>
  );
}

export default SlideIndicators;

