/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';

export function Product() {
  return (
    <section className="section w-full grid place-items-center z-10" id="product">
      <div className="absolute -left-[360px] -z-10 -top-14 max-md:-left-[200px] max-md:-top-16 max-md:w-[500px] max-md:h-[400px] bg-maskGradient w-[600px] h-[500px]"></div>
      <img src="/grow.svg" alt="" className="absolute left-0 -z-10 top-[60px] md:top-[10%]" />
      <div className="absolute top-32 right-0 bg-[#6C33C9] -z-10 h-[12rem] w-[12rem] rounded-full blur-[8rem] select-none max-md:hidden" />
      <div className="flex flex-col justify-start w-full max-w-[1050px] gap-[118px]">
        <header className="flex flex-col gap-3 items-start w-full relative">
          <SectionDescription text="WHAT’S GROWCHIEF" className="" />
          <SectionTitle>
            We specialize in human-centered design where technology serves humanity, not the other way around.
          </SectionTitle>
        </header>
        <div className="w-full flex justify-between items-center gap-[84px] max-md:justify-center max-md:flex-col">
          <div className="relative">
            <img src="/product-image.png" alt="product section image" className="z-20" />
            <div className="-z-10 bg-[#6C33C9] h-[15.25rem] w-full rounded-full blur-[10rem] select-none absolute top-1/2 -translate-y-1/2" />
          </div>
          <p className="max-w-[472px] text-[20px] font-normal leading-[30px]">
            This not only elevates your brand but also solves real-world problems. We see ourselves as your long-term
            partner – working closely with you for true collaboration, from initial concept to final product. This way,
            we’re invested in your success.
          </p>
        </div>
      </div>
    </section>
  );
}
