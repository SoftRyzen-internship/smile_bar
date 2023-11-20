import { Icon } from '../Icon';

export const ContactItem = ({ link, icon, text, type, className }) => {
  return (
    <a
      className={`flex gap-2 text-[16px] leading-[1.25] text-primary hover:text-contact hover:underline ${className}`}
      href={link}
      {...(type !== 'phone' && {
        rel: 'noopener noreferrer nofollow',
        target: '_blank',
      })}
    >
      <Icon name={icon} className="h-6 w-6" />
      {text}
    </a>
  );
};
