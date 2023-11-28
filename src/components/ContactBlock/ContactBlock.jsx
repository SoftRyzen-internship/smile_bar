import { ContactItem } from '../ContactItem';
import PropTypes from 'prop-types';

export const ContactBlock = ({ title, items = [] }) => {
  return (
    <>
      {title && (
        <p className="text-[20px] leading-[1.2] font-medium text-center md:text-left ">
          {title}
        </p>
      )}
      <ul className="flex flex-col items-center md:items-start gap-[8px]">
        {items.map(({ id, link, icon, text, type }) => (
          <li key={id}>
            <ContactItem link={link} icon={icon} text={text} type={type} />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.oneOf(['phone', 'location', 'social']),
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};
