'use client';

import { cn } from '@/lib/utils';

export function Benefit({
  description,
  title,
  width = 'large',
  children,
}: WithChildren<{
  title: string;
  description: string;
  width?: 'large' | 'small';
}>) {
  return (
    <div
      className={cn(
        'overflow-hidden w-full border rounded-3xl min-h-[472px] p-[1px] z-10',
        {
          'max-w-[739px] max-lg:max-w-full max-lg:min-h-[539px]':
            width === 'large',
          'max-w-[459px] max-lg:max-w-full max-lg:min-h-[539px]':
            width === 'small',
        }
      )}
      style={{
        background:
          'linear-gradient(90deg, rgba(101,101,101,1) 0%, rgba(176,144,187,1) 41%, rgba(126,59,191,1) 100%)',
      }}
    >
      <div className="min-h-[472px] flex flex-col overflow-hidden items-start w-full border rounded-3xl bg-[#13131A] z-10 max-lg:min-h-[539px]">
        <div className="w-full flex flex-col items-start gap-4 p-8 z-20 max-md:items-center">
          <h2 className="text-white font-medium text-[46px] leading-[100%] max-md:text-center">
            {title}
          </h2>
          <p className="text-[18px] leading-[150%] text-[#D3D3D3] max-md:text-center">
            {description}
          </p>
        </div>
        <div className="flex-[1] object-cover h-full w-full pt-6 relative">
          {children}
        </div>
      </div>
    </div>
  );
}
