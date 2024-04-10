import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface iGradientButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
}

export function GradientButton({ text = 'Book a Call', ...props }: iGradientButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        'cursor-pointer [border:none] py-2.5 px-3.5 bg-[transparent] self-stretch rounded-11xl [background:linear-gradient(0deg,_#5e3aee,_#be33ff)] shadow-[0px_14px_34px_rgba(15,_10,_22,_0.5),_0px_-6px_8px_rgba(255,_255,_255,_0.35)_inset,_0px_14px_14px_rgba(255,_255,_255,_0.25)_inset] flex flex-row items-center justify-center box-border whitespace-nowrap rounded-full transition duration-300 ease-in-out hover:bg-opacity-70',
        props.className,
      )}
      href="https://calendly.com/github20k/growth-article/"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <div className="w-full relative text-center text-lg max-md:text-sm font-medium font-body-1 text-text-white inline-block">
        {text}
      </div>
    </Link>
  );
}
