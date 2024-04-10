'use client';

import { useCallback, useEffect, useState } from 'react';

export function useDimensions(
  onTresholdReach?: () => void,
  threshold?: number
) {
  const hasWindow = typeof window !== 'undefined';

  const getWindowWidth = useCallback(() => {
    const width = hasWindow ? window.outerWidth : 0;

    if (threshold === width) {
      onTresholdReach?.();
    }

    return width;
  }, [hasWindow, threshold, onTresholdReach]);

  const [currentWidth, setCurrentWidth] = useState(getWindowWidth);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setCurrentWidth(getWindowWidth);
      };
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [currentWidth, getWindowWidth, hasWindow]);

  return {
    currentWidth,
  };
}
