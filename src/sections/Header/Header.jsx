'use client';
import { useState, useEffect } from 'react';

import BurgerIcon from '/public/menu.svg';
import CloseIcon from '/public/close.svg';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Call } from '@/components/Call';
import { BurgerMenu } from '@/components/BurgerMenu';
import { BurgerIconWrap } from '@/components/BurgerIconWrap/BurgerIconWrap';

export const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  // useEffect(() => {
  //   if (menuShow) {
  //     document.body.classList.add('isModalShow');
  //   } else {
  //     document.body.classList.remove('isModalShow');
  //   }
  // }, [modalShow]);
  return (
    <header className="relative w-full xl:pb-6">
      {menuShow ? (
        <BurgerMenu isShow={menuShow} onClose={() => setMenuShow(false)} />
      ) : null}
      <div className="container mx-auto flex items-center justify-between pb-9 xl:pb-0">
        <Logo />
        {menuShow ? (
          <BurgerIconWrap
            open={menuShow}
            setMenuShow={() => setMenuShow(false)}
          >
            <CloseIcon className="w-6 h-6 xl:hidden" />
          </BurgerIconWrap>
        ) : (
          <BurgerIconWrap open={menuShow} setMenuShow={() => setMenuShow(true)}>
            <BurgerIcon className="w-6 h-6 xl:hidden" />
          </BurgerIconWrap>
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
