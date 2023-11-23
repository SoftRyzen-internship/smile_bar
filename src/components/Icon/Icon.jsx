import Call from '/public/call.svg';
import Location from '/public/location.svg';
import Instagram from '/public/instagram.svg';
import Facebook from '/public/facebook.svg';
import BurgerIcon from '/public/menu.svg';
import CloseIcon from '/public/close.svg';
import PropTypes from 'prop-types';

export const Icon = ({ name, className, width = 24, height = 24 }) => {
  switch (name) {
    case 'Call':
      return <Call className={className} width={width} height={height} />;
    case 'BurgerIcon':
      return <BurgerIcon className={className} width={width} height={height} />;
    case 'CloseIcon':
      return <CloseIcon className={className} width={width} height={height} />;
    case 'Location':
      return <Location className={className} width={width} height={height} />;
    case 'Instagram':
      return <Instagram className={className} width={width} height={height} />;
    case 'Facebook':
      return <Facebook className={className} width={width} height={height} />;
  }
};

Icon.proptypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
