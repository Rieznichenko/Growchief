'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxGithubLogo } from 'react-icons/rx';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { navbarLinks } from '@/data/navbar-links.data';

export function Navbar() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <div className="fixed z-[10000000] px-6 w-full top-10 max-md:px-4 flex justify-center">
      <div className="w-full border border-white rounded-[20px] max-w-[1290px] backdrop-blur-[0.5rem] flex flex-col justify-center max-md:justify-start items-center transition-all duration-300">
        <nav className="shadow-black/[0.03] w-full bg-opacity-80 px-6 py-3 flex justify-between items-center transition-all h-20 relative">
          <Link href="#home" className="inline-flex items-center gap-2 text-[#C8C8C8]">
            <Image src="/navbar-icon.png" alt="navbar-icon" width={40.48} height={30} />
            Growchief
          </Link>
          <div className="flex items-center gap-14 max-md:hidden">
            {navbarLinks.map((navbarLink, index) => (
              <Link
                key={index}
                href={navbarLink.href}
                className="text-[#C8C8C8] font-light text-sm active:text-white transition-all hover:text-white"
              >
                {navbarLink.label}
              </Link>
            ))}
          </div>
          <Link
            href="https://github.com/github-20k/growchief/"
            target="_blank"
            rel="no referr"
            className="max-md:hidden inline-flex gap-2 items-center px-3 py-2 rounded-lg bg-[#13131A] border-[1.35px] z-20 border-[#656565] text-white hover:text-[#13131a] hover:bg-white transition-all"
          >
            <RxGithubLogo />
            Star Us | 2.9k
          </Link>
          <div className="grid place-items-center md:hidden">
            <button className="text-white text-2xl p-0" onClick={() => setIsMobileMenuActive(prev => !prev)}>
              {isMobileMenuActive ? <IoIosClose /> : <IoIosMenu />}
            </button>
          </div>
        </nav>
        <div
          className={cn(
            'h-0 w-full rounded-[20px] rounded-t-none md:rounded-t-none max-w-[94%] -left-[1px] transition-all duration-300 shadow-black/[0.03] bg-transparent backdrop-blur-[0.5rem] max-md:max-w-full z-50 overflow-y-hidden',
            {
              'h-[284px]': isMobileMenuActive,
            },
          )}
        >
          <div className="flex flex-col py-3 px-6 items-center gap-10">
            {navbarLinks.map((navbarLink, index) => (
              <Link
                key={index}
                href={navbarLink.href}
                onClick={() => setIsMobileMenuActive(false)}
                className="w-full text-[#C8C8C8] text-center font-light text-sm active:text-white transition-all hover:text-white"
              >
                {navbarLink.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
