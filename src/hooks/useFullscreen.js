import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for fullscreen functionality
 * @param {React.RefObject} elementRef - Reference to the element to make fullscreen
 * @returns {Object} Fullscreen state and toggle function
 */
export function useFullscreen(elementRef) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      elementRef.current?.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.error('Error entering fullscreen:', err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.error('Error exiting fullscreen:', err));
    }
  }, [elementRef]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return { isFullscreen, toggleFullscreen };
}

