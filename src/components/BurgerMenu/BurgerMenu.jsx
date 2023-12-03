import PropTypes from 'prop-types';

import { Navigation } from '../Navigation';
import { Call } from '../Call';
import { Logo } from '../Logo';
import { BurgerIconWrap } from '../BurgerIconWrap/BurgerIconWrap';
import { Icon } from '../Icon';
import { forwardRef } from 'react';

export const BurgerMenu = forwardRef(function menu({ isShow, onClose }, ref) {
  return (
    <div
      className={`w-full top-0 left-0 xl:hidden fixed bg-white  gradient  h-screen z-[300] gradient transition duration-150 easy-in-out
      ${
        isShow
          ? 'translate-y-0 opacity-1 visible'
          : '-translate-y-full opacity-0 invisible'
      } 
      `}
    >
      <div
        ref={ref}
        className="gradient w-full h-full pt-9 z-[400] pb-20 overflow-auto"
      >
        <div className="container mx-auto ">
          <div className="mb-9 flex justify-between">
            <Logo isShowMenu={isShow} onCloseMenu={onClose} />
            <BurgerIconWrap setMenuShow={onClose} open={true}>
              <Icon name="CloseIcon" className="xl:hidden" />
            </BurgerIconWrap>
          </div>

          <Navigation className="mb-12" isShow={isShow} onClose={onClose} />
          <Call />
        </div>
      </div>
    </div>
  );
});

BurgerMenu.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
