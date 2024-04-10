'use client';

import { useLayoutEffect, useState } from 'react';

import { useMediaQuery } from './use-media-query.hook';

export function useBreakpoints() {
  const [isClient, setIsClient] = useState(false);

  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(max-width: 768px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'SSR',
  };

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  if (isClient && breakpoints.isXs) breakpoints.active = 'xs';
  if (isClient && breakpoints.isSm) breakpoints.active = 'sm';
  if (isClient && breakpoints.isMd) breakpoints.active = 'md';
  if (isClient && breakpoints.isLg) breakpoints.active = 'lg';

  return breakpoints;
}
