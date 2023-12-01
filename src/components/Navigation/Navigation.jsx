import PropTypes from 'prop-types';
import navigation from '@/data/navigation.json';
import { Link } from 'react-scroll';

export const Navigation = ({
  className = '',
  isShow = false,
  onClose = null,
}) => {
  return (
    <ul className={`flex flex-col items-center gap-5 xl:flex-row ${className}`}>
      {navigation.map(({ id, title, link }, index) => (
        <li key={id}>
          <Link
            onClick={isShow ? onClose : null}
            className="text-center text-xl font-normal text-primary cursor-pointer xl:text-base hover:text-contact link"
            to={link}
            spy={true}
            smooth={true}
            duration={150}
            href="/"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
