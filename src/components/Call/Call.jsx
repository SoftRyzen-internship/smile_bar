import { Icon } from '../Icon';
import call from '@/data/call.json';

export const Call = () => {
  const { link, key, phone } = call;

  return (
    <a
      href={link}
      className="flex gap-2 items-center justify-center contactLink"
    >
      <Icon name="Call" className="stroke-primary" />
      <p
        key={key}
        className="text-center text-primary text-xl font-normal xl:text-base  hover:text-contact linkText"
      >
        {phone}
      </p>
    </a>
  );
};
