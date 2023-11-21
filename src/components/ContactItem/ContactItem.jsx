import { Icon } from '../Icon';

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
      <Icon name={icon} className="h-6 w-6" />
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
