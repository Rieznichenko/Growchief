import Link from 'next/link';
import { IoLogoDiscord, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

export function Footer() {
  return (
    <footer className="w-full flex justify-center items-center pb-[49px] py-2 px-3 relative overflow-hidden">
      <div className="w-full max-w-[1286px] flex flex-col sm:flex-row justify-between items-start z-20">
        <div className="flex mb-8 md:mb-0 flex-row gap-16 md:items-center">
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] mb-6">Page</h3>
            <Link
              href="#"
              className="text-[#A4ACB9] mb-2 text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[#A4ACB9] mb-2 text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-[#A4ACB9] text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] mb-6">Resources</h3>
            <Link
              href="#"
              className="text-[#A4ACB9] mb-2 text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Book a Call
            </Link>
            <Link
              href="#"
              className="text-[#A4ACB9] mb-2 text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Term of Use
            </Link>
            <Link
              href="#"
              className="text-[#A4ACB9] text-[16px] transition-all hover:translate-x-3 hover:text-[#6C33C9] duration-500"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="@sdsada" className="text-xl text-[#7919F3] transition-all duration-300 hover:-translate-y-[6px]">
            <IoLogoTwitter />
          </Link>
          <Link href="@sdsada" className="text-xl text-[#7919F3] transition-all duration-300 hover:-translate-y-[6px]">
            <IoLogoLinkedin />
          </Link>
          <Link href="@sdsada" className="text-xl text-[#7919F3] transition-all duration-300 hover:-translate-y-[6px]">
            <IoLogoDiscord />
          </Link>
        </div>
      </div>
    </footer>
  );
}
