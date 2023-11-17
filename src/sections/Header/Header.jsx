'use client';
import { useState } from 'react';
import Link from 'next/link';

import BurgerIcon from '/public/menu.svg';
import CloseIcon from '/public/close.svg';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Call } from '@/components/Call';
import { BurgerMenu } from '@/components/BurgerMenu';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <header className="relative w-full">
      {menuShow ? (
        <BurgerMenu isShow={menuShow} onClose={() => setMenuShow(false)} />
      ) : null}
      <div className="container mx-auto flex items-center justify-between pb-9 xl:pb-0">
        <Logo />
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
        <nav className="hidden xl:block">
          <Navigation />
        </nav>
        <div className="hidden xl:block">
          <Call />
        </div>
      </div>
    </header>
  );
};

export default Header;
