import { useEffect } from 'react';

/**
 * Custom hook for keyboard navigation in presentations
 * @param {Object} handlers - Navigation handler functions
 * @param {Function} handlers.onNext - Handler for next slide
 * @param {Function} handlers.onPrev - Handler for previous slide
 * @param {Function} handlers.onFirst - Handler for first slide
 * @param {Function} handlers.onLast - Handler for last slide
 * @param {Function} handlers.onGoToSlide - Handler for jumping to specific slide
 * @param {Function} handlers.onToggleFullscreen - Handler for fullscreen toggle
 */
export function useKeyboardNavigation({
  onNext,
  onPrev,
  onFirst,
  onLast,
  onGoToSlide,
  onToggleFullscreen,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default for presentation keys
      if (['ArrowRight', 'ArrowLeft', 'Space', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space bar
          onNext?.();
          break;
        case 'ArrowLeft':
          onPrev?.();
          break;
        case 'Home':
          onFirst?.();
          break;
        case 'End':
          onLast?.();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            onFirst?.();
          }
          break;
        case 'f':
        case 'F':
          onToggleFullscreen?.();
          break;
        default:
          // Number keys 1-9 for quick navigation
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= 9) {
            onGoToSlide?.(num - 1);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onFirst, onLast, onGoToSlide, onToggleFullscreen]);
}

