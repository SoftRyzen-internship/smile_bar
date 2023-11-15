import navigation from '@/data/navigation.json';

export const Navigation = () => {
  return (
    <nav>
      <ul className="xl:flex gap-x-5">
        {navigation.map((el, index) => (
          <li key={index}>
            <a className="text-center text-xl font-normal text-primary xl:text-base">
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
