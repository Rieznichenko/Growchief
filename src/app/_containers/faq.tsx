'use client';

import { motion } from 'framer-motion';

import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';
import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';

export function Faq() {
  return (
    <section className="section flex flex-col items-center gap-10 z-10 bg-scroll relative mt-20">
      <header className="w-full gap-4 flex flex-col justify-center items-center">
        <SectionDescription text="faq" className="" />
        <SectionTitle className="max-md:text-center">Frequently Asked Questions</SectionTitle>
        <p className="text-[#D3D3D3] text-center max-w-[373px] leading-[150%] font-normal text-[18px]">
          Still unsure? Find the answers you’re looking for here in our laatest FAQ
        </p>
      </header>
      <Accordion type="multiple" className="w-full max-w-[1006px]">
        {faqs.map((faq, index) => (
          <AccordionItem value={faq.question} className="w-full max-w-[1006px]" key={index}>
            <AccordionTrigger className="w-full max-w-[1006px] text-[20px] font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#D3D3D3] text-[14px] leading-[150%] mt-[8px]">
                Launch weeks is a concept of driving traffic into a specific source within a week. <br /> The goal is to
                achieve virality. Most platforms reward you when you bring massive traffic in a short period.
                That&apos;s the best way to drive a lot of attention in a short time. <br /> Once the launch week is
                finished, you will remain with unique assets that drive SEO traffic. <br /> The service is Done-For-You.
                Sit back and relax. We take care of everything.
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
