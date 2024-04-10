/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { useBreakpoints } from '@/hooks/use-breakpoints.hook';

import { SectionTitle } from './section-title';
import { GradientButton } from './gradient-button';

const DesktopVersion = () => (
  <div className="overflow-hidden relative w-full min-h-[444px] p-16 rounded-[40px] bg-[#13131A]">
    <div className="gap-6 flex flex-col items-start z-50 relative">
      <SectionTitle className="text-[52px] leading-[100%]">
        Ready to build <br /> something? <br />
        Go with us!
      </SectionTitle>
      <p className="text-[#D3D3D3] max-w-[515px] z-30 leading-[150%] text-[18px]">
        We merge tech with marketing. Helping you trend on different platforms. Gain genuine clients, effortlessly.
      </p>
      <GradientButton className="max-w-[180px] z-30" />
    </div>
    <div className="absolute bottom-0 -left-6 z-30 select-none bg-[#6C33C9] h-[5rem] w-[25rem] rounded-full blur-[5rem]" />
    <img
      className="w-[586.7px] h-[503.9px] absolute my-0 mx-[!important] top-[-231px] left-[332px] object-contain z-[1]"
      alt=""
      src="/blur.svg"
    />
    <Image
      src="/git-room-dots.png"
      alt="Dots"
      width={484}
      height={484}
      className="absolute -left-5 -bottom-4 z-0 select-none opacity-55"
    />
    <img
      src="/git-room-bg.svg"
      alt="bg"
      className="w-full max-w-[932px] -z-0 opacity-45 absolute right-0 top-0 select-none h-full object-cover"
      style={{
        boxShadow: '12px 29px 81px 0px rgba(0,0,0,0.75)',
      }}
    />
  </div>
);

const MobileVersion = () => (
  <div className="w-full min-h-fit flex flex-col relative bg-[#13131A] rounded-[40px] overflow-hidden">
    <div className="p-8 relative z-40 overflow-hidden">
      <SectionTitle className="text-center mb-6 text-[48px] leading-[100%]">
        Ready to <br /> build <br /> something? <br /> Go with us!
      </SectionTitle>
      <p className="text-center w-full max-w-[268px] text-[16px] leading-[150%] text-[#D3D3D3] mx-auto mb-6">
        We merge tech with marketing. Helping you trend on different platforms. Gain genuine clients, effortlessly.
      </p>
      <GradientButton className="max-w-[240px] text-[20px] z-30 mx-auto min-h-[58px]" />
      <img src="/git-room-dots.png" alt="Dots" className="absolute -z-20 bottom-0 left-1/2 -translate-x-1/2" />
    </div>
    <div className="flex-[1]">
      <Image
        src="/git-room-bg-small.png"
        alt="git-room-bg-small.png"
        className="object-fill min-h-[502px] flex-grow"
        width={932}
        height={502}
      />
    </div>
  </div>
);

export function GitroomBox() {
  const { isMd } = useBreakpoints();

  return (
    <section className="section w-full flex justify-center items-center relative">
      <div
        className="p-[1px] w-full max-w-[1287px] min-h-[444px] rounded-[40px] max-md:min-h-fit"
        style={{
          background:
            'linear-gradient(90deg, rgba(101,101,101,1) 0%, rgba(176,144,187,1) 41%, rgba(126,59,191,1) 100%)',
        }}
      >
        {isMd ? <MobileVersion /> : <DesktopVersion />}
      </div>
    </section>
  );
}
