import CallIcon from '/public/call.svg';
import call from '../../data/call.json';

export const Call = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <CallIcon className="w-6 h-6 stroke-primary" />
      {call.map(({ link, phone }) => (
        <a
          href={link}
          className="text-center text-primary text-xl font-normal xl:text-base hover:underline hover:text-contact"
        >
          {phone}
        </a>
      ))}
    </div>
  );
};
