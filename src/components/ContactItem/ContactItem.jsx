import { Icon } from '../Icon';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css'

export const ContactItem = ({ link, icon, text, type, className }) => {
  return (
    <a
      className={`flex items-center gap-[8px] text-[16px] leading-[1.25] text-primary ${styles.contactLink} ${className}`}
      href={link}
      {...(type !== 'phone' && {
        rel: 'noopener noreferrer nofollow',
        target: '_blank',
      })}
    >
      <Icon name={icon} />
      <p className={`flex flex-wrap ${styles.contactLinkText}`}>
        {text.split('|').map((elem, index) => (
          <span
            className={`whitespace-pre  ${styles.contactLinkText}`}
            key={index}
          >
            {elem}
          </span>
        ))}
      </p>
    </a>
  );
};

// transition-[text-decoration] duration-500 ease-in-out no-underline hover:underline

ContactItem.proptypes = {
  type: PropTypes.oneOf(['phone', 'location', 'social']),
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};
