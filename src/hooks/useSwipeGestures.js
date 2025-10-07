import { useRef, useCallback } from 'react';

const DEFAULT_THRESHOLD = 50;

/**
 * Custom hook for touch/swipe gestures
 * @param {Object} handlers - Swipe handler functions
 * @param {Function} handlers.onSwipeLeft - Handler for left swipe (next)
 * @param {Function} handlers.onSwipeRight - Handler for right swipe (previous)
 * @param {number} threshold - Minimum distance for a swipe to be detected
 * @returns {Object} Touch event handlers
 */
export function useSwipeGestures({ onSwipeLeft, onSwipeRight }, threshold = DEFAULT_THRESHOLD) {
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchEndRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe) {
      onSwipeLeft?.();
    } else if (isRightSwipe) {
      onSwipeRight?.();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}

