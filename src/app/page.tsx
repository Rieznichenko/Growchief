/* eslint-disable @next/next/no-img-element */
import { Footer } from '@/components/layout/footer';
import { GitroomBox } from '@/components/layout/gitroom-box';

import { Faq } from './_containers/faq';
import { Product } from './_containers/product';
import { Pricing } from './_containers/pricing';
import { Newsletter } from './_containers/newsletter';
import { HeroSection } from './_containers/hero-section';
import { Testemonials } from './_containers/testemonials';
import { ProcessSection } from './_containers/process-section';
import { BenefitsSection } from './_containers/benefits-section';
import DotGrid from '../components/ui/dots';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <main className="relative min-h-svh w-full bg-black py-[34px] z-10 overflow-hidden">
      {/* <DotGrid /> */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 max-md:hidden -z-[1] bg-maskGradient w-[1200px] h-[600px]"></div>
      <HeroSection />
      <Product />
      <Testemonials />
      <BenefitsSection />
      <ProcessSection />
      <Faq />
      <Pricing />
      <GitroomBox />
      <Newsletter />
      <Footer />
    </main>
  );
}
