import Link from 'next/link';

import { Logo } from '@/components/Logo';
import footer from '@/data/footer';
import style from './Footer.module.css';

export const Footer = () => {
  const { copyright, text, link } = footer;
  return (
    <footer className="container pt-[18px] pb-9 md:pt-6 md:pb-[38px] xl:py-10">
      <div className="flex justify-between items-center pt-5 md:pt-9 xl:pt-6 border-t border-bord">
        <p className="smOnly:max-w-[90px]">{copyright}</p>
        <Logo className="w-[68px] h-[48px] xl:w-[90px] xl:h-[62px]" />
        <p className="smOnly:max-w-[90px] text-right">
          {text}
          <Link
            href={link.src}
            className={`creatorLink ${style.creatorLink}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {link.textLink}
          </Link>
        </p>
      </div>
    </footer>
  );
};
