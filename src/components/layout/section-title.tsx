import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

export function SectionTitle({
  children,
  className,
}: WithChildren<{
  className?: ClassValue;
}>) {
  return (
    <h2
      className={cn(
        'text-[64px] font-medium section-title max-w-[1038px] leading-[100%] max-md:text-[48px]',
        className
      )}
    >
      {children}
    </h2>
  );
}
