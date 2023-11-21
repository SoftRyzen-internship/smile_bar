import Call from '/public/call.svg';
import Location from '/public/location.svg';
import Instagram from '/public/instagram.svg';
import Facebook from '/public/facebook.svg';
import PropTypes from 'prop-types';

export const Icon = ({ name, className }) => {
  switch (name) {
    case 'Call':
      return <Call className={className} />;
    case 'Location':
      return <Location className={className} />;
    case 'Instagram':
      return <Instagram className={className} />;
    case 'Facebook':
      return <Facebook className={className} />;
  }
};

Icon.proptypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
