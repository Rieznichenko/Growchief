/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import { CarouselPrevious, Carousel, CarouselItem, CarouselContent, CarouselNext } from '@/components/ui/carousel';
import { testemonials } from '@/data/testemonials.data';
import { Testemonial } from '@/components/layout/testemonial';
import { SectionTitle } from '@/components/layout/section-title';
import { SectionDescription } from '@/components/layout/section-description';
// import { Overlay } from '@/components/layout/overlay';

export function Testemonials() {
  return (
    <section className="section overflow-x-hidden flex flex-col justify-between items-center gap-10 z-10 bg-scroll relative">
      <div className="py-[64px] flex flex-col gap-[86px] items-center w-full">
        <header className="flex justify-center items-center gap-8 w-full">
          <div
            className="flex-1 max-md:hidden h-[82px]"
            style={{
              background: '#111 -webkit-linear-gradient(left, #111, #6C33C9) no-repeat 0 0 / 82px',
              mask: `url("/mask-left.svg")`,
              maskSize: 'fill',
              maskRepeat: 'no-repeat',
              maskPosition: 'right',
              animation: 'sweepLeft 4.5s ease-in infinite',
            }}
          ></div>
          <div className="flex gap-3 flex-col items-center">
            <SectionDescription text="TESTIMONIALS" className="" />
            <SectionTitle className="text-center min-w-[333px] max-md:min-w-fit">
              What our <br /> clients say
            </SectionTitle>
          </div>
          <div
            className="flex-1 max-md:hidden h-[82px]"
            style={{
              background: '#111 -webkit-linear-gradient(right, #111, #6C33C9) no-repeat 0 0 / 82px',
              mask: `url("/mask-right.svg")`,
              maskSize: 'fill',
              maskRepeat: 'no-repeat',
              animation: 'sweepRight 4.5s ease-in infinite',
            }}
          ></div>
        </header>
        <Carousel className="flex flex-col w-full flex-[1] relative max-w-[1290px] mx-auto">
          {/* <Overlay className="-left-2" /> */}
          <CarouselContent className="w-full flex-[1] relative ml-0">
            {testemonials.map((testemonial, index) => (
              <CarouselItem
                key={index}
                className="basis-[500px] border-none outline-none p-0 m-0 ml-[50px] max-sm:basis-[100%] max-sm:ml-[16px]"
              >
                <Testemonial {...testemonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* <Overlay className="-right-2" /> */}
          <div className="flex items-center gap-3 min-h-[47px] justify-center relative pt-[64px]">
            <CarouselPrevious className="relative inset-auto w-[47px] h-[47px]" />
            <CarouselNext className="relative inset-auto w-[47px] h-[47px]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
