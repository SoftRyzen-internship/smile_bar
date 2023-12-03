'use client';
import { useState, useEffect, useRef } from 'react';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Call } from '@/components/Call';
import { BurgerMenu } from '@/components/BurgerMenu';
import { BurgerIconWrap } from '@/components/BurgerIconWrap/BurgerIconWrap';
import { Icon } from '@/components/Icon';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

export const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const refBurger = useRef(null);

  useEffect(() => {
    if (!refBurger.current) {
      return;
    }
    if (menuShow) {
      disableBodyScroll(refBurger.current);
    } else {
      enableBodyScroll(refBurger.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuShow]);

  return (
    <>
      <header className={` relative w-full pt-9 xl:pb-6 `}>
        <div className="max-w-[100vw] container mx-auto flex items-center justify-between pb-9 xl:pb-0">
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

      <BurgerMenu
        ref={refBurger}
        isShow={menuShow}
        onClose={() => setMenuShow(false)}
      />
    </>
  );
};
