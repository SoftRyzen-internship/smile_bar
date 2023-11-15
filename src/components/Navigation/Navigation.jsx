import navigation from '@/data/navigation.json';

export const Navigation = ({ className }) => {
  return (
    <ul className={`flex flex-col items-center gap-5 xl:flex-row ${className}`}>
      {navigation.map((el, index) => (
        <li key={index}>
          <a className="text-center text-xl font-normal text-primary cursor-pointer xl:text-base hover:underline hover:text-contact">
            {el}
          </a>
        </li>
      ))}
    </ul>
  );
};
