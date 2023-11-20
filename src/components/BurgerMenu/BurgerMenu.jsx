import PropTypes from 'prop-types';

import { Navigation } from '../Navigation';
import { Call } from '../Call';

export const BurgerMenu = ({ isShow, onClose }) => {
  return (
    <div className="z-30 absolute bg-white w-full top-full h-screen xl:hidden">
      <Navigation className="mb-12" isShow={isShow} onClose={onClose} />
      <Call />
    </div>
  );
};

BurgerMenu.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
