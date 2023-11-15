'use client';
import { useState } from 'react';
import Link from 'next/link';

import BurgerIcon from '/public/menu.svg';
import CloseIcon from '/public/close.svg';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Call } from '@/components/Call';
import { MobMenu } from '@/components/MobMenu';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <header className="container mx-auto relative flex items-center justify-between pb-9 xl:pb-0">
      <Link href="/">
        <Logo />
      </Link>
      {menuShow ? (
        <CloseIcon
          className="w-6 h-6 xl:hidden cursor-pointer"
          onClick={() => setMenuShow(false)}
        />
      ) : (
        <BurgerIcon
          className="w-6 h-6 xl:hidden cursor-pointer"
          onClick={() => setMenuShow(true)}
        />
      )}
      {menuShow ? <MobMenu /> : null}

      <nav className="hidden xl:block">
        <Navigation />
      </nav>
      <div className="hidden xl:block">
        <Call />
      </div>
    </header>
  );
};

export default Header;
