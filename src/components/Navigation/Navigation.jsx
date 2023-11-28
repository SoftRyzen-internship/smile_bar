import PropTypes from 'prop-types';
import navigation from '@/data/navigation.json';

export const Navigation = ({
  className = '',
  isShow = false,
  onClose = null,
}) => {
  return (
    <ul className={`flex flex-col items-center gap-5 xl:flex-row ${className}`}>
      {navigation.map(({ id, title, link }, index) => (
        <li key={id}>
          <a
            href={`/${link}`}
            onClick={isShow ? onClose : null}
            className="text-center text-xl font-normal text-primary cursor-pointer xl:text-base hover:text-contact link"
          >
            {title}
          </a>
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
