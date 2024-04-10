/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { GradientButton } from '@/components/layout/gradient-button';
import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';

const pricingDescriptionClassName = 'text-[24px] text-[#D3D3D3] leading-[150%]';

export function Card() {
  return (
    <div
      className="overflow-hidden p-[1px] min-h-[488px] rounded-[27px] w-full max-w-[523px] shadow-inset-lg z-10 relative"
      style={{
        background: 'linear-gradient(90deg, rgba(101,101,101,1) 0%, rgba(176,144,187,1) 41%, rgba(126,59,191,1) 100%)',
      }}
    >
      <div className="p-[1.5rem] sm:p-8 h-full w-full rounded-[27px] bg-[#13131A] shadow-inset-lg z-10 relative">
        <header className="w-full flex flex-col items-start gap-2 pb-[24px] border-b mb-6">
          <h2 className="text-white text-[32px] font-medium">Explosive Growth</h2>
          <p className="text-[#D3D3D3] text-sm">
            Perfect for your next content, leave to us <br /> and enjoy the result!
          </p>
        </header>
        <div className="w-full mb-14">
          <div className="flex items-center justify-start gap-2.5 mb-2">
            <Image className="select-none" src="/pricing/check-circle.png" alt="check item" width={32} height={32} />
            <p className={pricingDescriptionClassName}>10 Launch Weeks</p>
          </div>
          <div className="flex items-center justify-start gap-2.5 mb-2">
            <Image className="select-none" src="/pricing/check-circle.png" alt="check item" width={32} height={32} />
            <p className={pricingDescriptionClassName}>10 Influencers Posts</p>
          </div>
          <div className="flex items-center justify-start gap-2.5 mb-2">
            <Image className="select-none" src="/pricing/check-circle.png" alt="check item" width={32} height={32} />
            <p className={pricingDescriptionClassName}>100,000 views</p>
          </div>
          <div className="flex items-center justify-start gap-2.5 mb-2">
            <Image className="select-none" src="/pricing/check-circle.png" alt="check item" width={32} height={32} />
            <p className={pricingDescriptionClassName}>10 Reddit Posts</p>
          </div>
          <div className="flex items-center justify-start gap-2.5">
            <Image className="select-none" src="/pricing/check-circle.png" alt="check item" width={32} height={32} />
            <p className={pricingDescriptionClassName}>2 Hours Marketing Consultation</p>
          </div>
        </div>
        <GradientButton className="w-full h-[58px]" />
        <img
          src="/pricing/gradient.svg"
          alt="Gradient"
          className="absolute bottom-0 left-0 w-full -z-10 rounded-b-2xl"
        />
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section
      className="section flex flex-col items-center gap-10 z-10 bg-scroll relative overflow-x-hidden"
      id="pricing"
    >
      <header className="w-full flex items-center gap-4 justify-center">
        <div className="flex flex-col gap-4 items-center">
          <SectionDescription text="pricing" className="" />
          <SectionTitle className="max-md:text-center">The Startup Package</SectionTitle>
          <p className="text-[#D3D3D3] text-center text-[18px] leading-[150%]">
            Should you be unsatisfied with the initial article, we are committed to <br /> offering a full refund.
          </p>
        </div>
      </header>
      <div className="w-full items-center justify-center flex px-4">
        <div className="relative min-h-[488px] w-full max-w-[523px]">
          <img
            src="/pricing/line.png"
            alt="Line"
            className="-z-10 absolute top-1/2 -translate-y-1/2 -left-96 select-none flex-[1]"
          />
          <img
            src="/pricing/dots.png"
            alt="dots"
            className="-z-10 absolute top-1/2 -translate-y-1/2 -left-28 select-none"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#6C33C9] -z-10 h-[15.25rem] w-1/2 rounded-full blur-[10rem] select-none" />
          <Card />
          <img
            src="/pricing/dots.png"
            alt="dots"
            className="-z-10 absolute top-1/2 -translate-y-1/2 -right-12 select-none"
          />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#6C33C9] -z-10 h-[15.25rem] w-1/2 rounded-full blur-[10rem] select-none" />
          <img
            src="/pricing/line.png"
            alt="Line"
            className="-z-10 absolute rotate-180 top-1/2 -translate-y-1/2 -right-96 select-none flex-[1]"
          />
        </div>
      </div>
    </section>
  );
}
