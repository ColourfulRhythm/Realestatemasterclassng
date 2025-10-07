import { useState, useEffect } from 'react';

const DEFAULT_STORAGE_KEY = 'presentation-current-slide';

/**
 * Custom hook for managing slide history with localStorage and URL hash
 * @param {Array} slides - Array of slide objects with 'id' property
 * @param {string} storageKey - Key for localStorage (optional)
 * @returns {Object} Current slide state and update function
 */
export function useSlideHistory(slides, storageKey = DEFAULT_STORAGE_KEY) {
  const [currentSlide, setCurrentSlideState] = useState(() => {
    // Try to load from URL hash first
    const hash = window.location.hash.slice(1);
    const slideIndex = slides.findIndex(s => s.id === hash);
    if (slideIndex !== -1) return slideIndex;
    
    // Fall back to localStorage
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Update localStorage and URL when slide changes
  useEffect(() => {
    localStorage.setItem(storageKey, currentSlide.toString());
    window.history.replaceState(null, '', `#${slides[currentSlide].id}`);
  }, [currentSlide, slides, storageKey]);

  // Listen to hash changes (for browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const slideIndex = slides.findIndex(s => s.id === hash);
      if (slideIndex !== -1 && slideIndex !== currentSlide) {
        setCurrentSlideState(slideIndex);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [slides, currentSlide]);

  return [currentSlide, setCurrentSlideState];
}

