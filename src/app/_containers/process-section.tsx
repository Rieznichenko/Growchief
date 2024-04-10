/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { processes } from '@/data/processes.data';
import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';
import { cn } from '@/lib/utils';

export function ProcessSection() {
  const lineRef: any = useRef(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      const line = lineRef.current;

      if (window.scrollY > line.offsetTop && window.scrollY < line.offsetTop + line.clientHeight) {
        setScrollPosition(window.scrollY - line.offsetTop);
      } else if (window.scrollY < line.offsetTop) {
        setScrollPosition(0);
      } else if (window.scrollY > line.offsetTop + line.clientHeight) {
        setScrollPosition(92);
      }
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <section
      className="section flex flex-col justify-between items-center gap-16 z-10 bg-scroll relative max-sm:gap-8"
      ref={lineRef}
    >
      <header className="w-full flex items-center gap-[6px]">
        <div
          className="flex-1 max-md:hidden h-[82px]"
          style={{
            background: '#111 -webkit-linear-gradient(left, #111, #6C33C9) no-repeat 0 0 / 82px',
            mask: `url("/mask-right.svg")`,
            maskSize: 'fill',
            maskPosition: 'right',
            maskRepeat: 'no-repeat',
            animation: 'sweepLeft 4.5s ease-in infinite',
          }}
        ></div>
        <div className="flex flex-col gap-3 items-center min-w-[435px] max-md:min-w-full">
          <SectionDescription text="OUR PROCESS" className="" />
          <SectionTitle className="text-center">How We Work</SectionTitle>
        </div>
        <div
          className="flex-1 max-md:hidden h-[82px]"
          style={{
            background: '#111 -webkit-linear-gradient(right, #111, #6C33C9) no-repeat 0 0 / 82px',
            mask: `url("/mask-left.svg")`,
            maskSize: 'fill',
            maskPosition: 'left',
            maskRepeat: 'no-repeat',
            animation: 'sweepRight 4.5s ease-in infinite',
          }}
        ></div>
      </header>
      <div className="w-full pt-16 flex flex-col gap-[179px] items-center relative min-h-[1264px] max-w-[1135px] mx-auto px-[38px] max-md:px-0 max-md:gap-10">
        <Image
          src="/scroll-line.svg"
          alt="Scroll Line"
          width={3}
          height={0}
          className="absolute top-20 left-0 min-h-[93%] object-cover max-md:hidden"
        />
        <Image
          src="/scroll-line-over.svg"
          alt="Scroll Line"
          width={3}
          height={0}
          style={{ height: scrollPosition }}
          className="absolute top-20 left-0 z-1 max-h-[93%] max-md:hidden object-cover"
        />
        {processes.map((processItem, index) => (
          <div
            className="w-full max-h-[324px] flex justify-between items-center max-md:flex-col max-md:justify-center max-md:max-h-fit max-md:gap-6"
            key={index}
          >
            <div className="flex flex-col gap-6 items-start w-full max-w-[477px] max-md:items-center">
              <h2 className="text-white text-[46px] leading-[100%] font-medium max-md:text-[38px]">
                {processItem.title}
              </h2>
              <p className="text-[#D3D3D3] leading-[150%] text-[18px]">{processItem.description}</p>
            </div>
            <div className="w-full max-w-[420px] grid place-items-center h-full min-h-[324px] relative">
              <Image
                src={processItem.imageUrl}
                alt={processItem.title}
                width={391}
                height={324}
                className="z-20 absolute left-0 max-md:left-0 w-full"
              />
              <img
                src="/processes/dots.png"
                alt="dots"
                className={cn('absolute z-10', {
                  'left-16': index == 0,
                })}
              />
              <div className="absolute inset-0 z-10 select-none bg-[#6C33C9] h-full rounded-full blur-[7rem] opacity-30" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
