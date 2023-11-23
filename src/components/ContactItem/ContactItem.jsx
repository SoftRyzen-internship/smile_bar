import { Icon } from '../Icon';
import PropTypes from 'prop-types';

export const ContactItem = ({ link, icon, text, type, className }) => {
  return (
    <a
      className={`flex items-center gap-[8px] text-[16px] leading-[1.25] text-primary hover:text-contact hover:underline ${className}`}
      href={link}
      {...(type !== 'phone' && {
        rel: 'noopener noreferrer nofollow',
        target: '_blank',
      })}
    >
      <Icon name={icon} />
      <p className="flex flex-wrap">
        {text.split('|').map((elem, index) => (
          <span className="whitespace-pre" key={index}>
            {elem}
          </span>
        ))}
      </p>
    </a>
  );
};

ContactItem.proptypes = {
  type: PropTypes.oneOf(['phone', 'location', 'social']),
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};
