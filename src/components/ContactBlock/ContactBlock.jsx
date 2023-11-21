import { ContactItem } from '../ContactItem';
import { Icon } from '../Icon';

export const ContactBlock = ({ title, items }) => {
  return (
    <>
      <p className="text-[20px] leading-[1.2] font-medium text-center md:text-left ">
        {title}
      </p>
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
