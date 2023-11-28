import { Icon } from '../Icon';
import call from '@/data/call.json';

export const Call = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Icon name="Call" className="stroke-primary" />
      {call.map(({ link, phone, key }) => (
        <a
          key={key}
          href={link}
          className="text-center text-primary text-xl font-normal xl:text-base  hover:text-contact link"
        >
          {phone}
        </a>
      ))}
    </div>
  );
};
