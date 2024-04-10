'use client';

import Image from 'next/image';

import type { Testemonial } from '@/data/testemonials.data';

export function Testemonial({ content, logoUrl, name, nameDescription, profilePicUrl }: Testemonial) {
  return (
    <div
      className="w-[500px] h-[360px] overflow-hidden max-sm:h-full max-sm:w-[100%] rounded-[27px] p-[1.35px]"
      style={{
        background: 'linear-gradient(90deg, rgba(101,101,101,1) 0%, rgba(176,144,187,1) 41%, rgba(126,59,191,1) 100%)',
      }}
    >
      <div className="flex justify-between flex-col items-start gap-5 w-full min-h-full px-[1.3rem] py-[2rem] sm:p-8 rounded-[27px] bg-[#0C0C12] object-cover max-md:h-fit">
        <header className="flex items-center gap-4 flex-wrap">
          <Image
            src={profilePicUrl}
            alt={name + ' url'}
            width={50}
            height={50}
            className="rounded-full select-none w-[50px] h-[50px]"
          />
          <div className="flex items-start flex-col">
            <h3 className="text-[24px] font-[500] leading-[140%] text-white">{name}</h3>
            <span className="text-[#677487] text-[18px] leading-[150%]">{nameDescription}</span>
          </div>
        </header>
        <p className="w-full text-[#d3d3d3] text-[20px] leading-[150%]">{content}</p>
        <Image src={logoUrl} alt={`Logo ${name}`} width={100} height={32} />
      </div>
    </div>
  );
}
