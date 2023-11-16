import PropTypes from 'prop-types';

import { Navigation } from '../Navigation';
import { Call } from '../Call';

export const MobMenu = ({ isShow, onClose }) => {
  return (
    <div className="absolute w-full top-full pb-[204px] md:pb-[309px] xl:hidden">
      <Navigation className="mb-12" isShow={isShow} onClose={onClose} />
      <Call />
    </div>
  );
};

MobMenu.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
