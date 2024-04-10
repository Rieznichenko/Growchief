import { type ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

export function Overlay({ className }: { className?: ClassValue }) {
  return (
    <div
      className={cn(
        'bg-black absolute h-full w-[4%] blur-[8px] z-50 -top-10 max-md:hidden',
        className
      )}
    />
  );
}
