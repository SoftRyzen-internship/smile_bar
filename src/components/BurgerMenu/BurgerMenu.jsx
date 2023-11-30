import PropTypes from 'prop-types';

import { Navigation } from '../Navigation';
import { Call } from '../Call';
import { Logo } from '../Logo';

export const BurgerMenu = ({ isShow, onClose }) => {
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
      <div className="gradient w-full h-full pt-9 z-[400]">
        <div className="container mx-auto">
          <Logo
            isShowMenu={isShow}
            onCloseMenu={onClose}
            className="mb-9 block"
          />
          <Navigation className="mb-12" isShow={isShow} onClose={onClose} />
          <Call />
        </div>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
