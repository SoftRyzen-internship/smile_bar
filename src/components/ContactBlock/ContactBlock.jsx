import { ContactItem } from '../ContactItem';
import { Icon } from '../Icon';

export const ContactBlock = ({ title, items }) => {
  return (
    <>
      <p>{title}</p>
      <ul>
        {items.map(({ id, link, icon, text, type }) => (
          <li key={id}>
            <ContactItem
              link={link}
              icon={icon}
              text={text}
              type={type}
              className="h-6"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
