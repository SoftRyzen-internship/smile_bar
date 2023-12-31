'use client';
import { useState, useEffect } from 'react';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Call } from '@/components/Call';
import { BurgerMenu } from '@/components/BurgerMenu';
import { BurgerIconWrap } from '@/components/BurgerIconWrap/BurgerIconWrap';
import { Icon } from '@/components/Icon';

export const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    if (menuShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuShow]);

  return (
    <>
      <header className={` relative w-full pt-9 xl:pb-6 `}>
        <div className="container mx-auto flex items-center justify-between pb-9 xl:pb-0">
          <Logo isShowMenu={menuShow} onCloseMenu={() => setMenuShow(false)} />
          {!menuShow && (
            <BurgerIconWrap
              open={menuShow}
              setMenuShow={() => setMenuShow(true)}
            >
              <Icon name="BurgerIcon" className="xl:hidden" />
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
      {menuShow && (
        <BurgerMenu isShow={menuShow} onClose={() => setMenuShow(false)} />
      )}
    </>
  );
};
