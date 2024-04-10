import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { subscribeToNewsletter } from '@/actions/subscribe-to-newsletter.action';

export function Newsletter() {
  return (
    <section className="section w-full max-md:px-2 flex justify-center items-center max-md:text-center relative">
      <Image
        src="/footer-bg.svg"
        alt="Footer"
        width={484}
        height={484}
        className="absolute -bottom-[68%] right-[9%] object-cover z-0 hidden md:block"
      />
      <div className="w-full px-3 max-w-[1287px] border-b pb-16 gap-4 flex justify-between items-center flex-wrap">
        <div className="flex flex-col items-start gap-9 max-sm:w-full">
          <h2 className="inline-flex text-white text-3xl gap-3 items-center max-sm:w-full">
            <Image src="/navbar-icon.png" alt="Logo" width={66} height={44} />
            Growchief
          </h2>
          <p className="text-[#A4ACB9] sm:max-w-[329px] leading-[150%] text-left">
            We do a whole week of launch around your prouct, including an article, Reddit promotion, influencers posts,
            and so much more
          </p>
        </div>
        <div className="flex flex-col items-start gap-[27px] max-sm:w-full">
          <h2 className="text-white text-[28px] font-medium max-md:text-left">Subscribe to Our Newsletter</h2>
          <form action={subscribeToNewsletter} className="flex gap-3 items-center max-sm:flex-col max-sm:w-full">
            <Input
              name="email"
              type="email"
              placeholder="Your email address"
              className="rounded-full border border-[#444] bg-inherit w-full sm:w-[320px] min-h-[58px] px-6 py-[17px] placeholder:text-[16px] placeholder:text-white"
              required
            />
            <button
              className="cursor-pointer [border:none] py-2.5 px-3.5 bg-[transparent] self-stretch rounded-11xl [background:linear-gradient(0deg,_#5e3aee,_#be33ff)] shadow-[0px_14px_34px_rgba(15,_10,_22,_0.5),_0px_-6px_8px_rgba(255,_255,_255,_0.35)_inset,_0px_14px_14px_rgba(255,_255,_255,_0.25)_inset] flex flex-row items-center justify-center box-border whitespace-nowrap rounded-full transition duration-300 ease-in-out hover:bg-opacity-70 max-sm:w-full min-w-[170px] min-h-[58px]"
              type="submit"
            >
              <div className="w-full relative text-center text-[20px] font-medium font-body-1 text-text-white inline-block">
                Subscribe
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
