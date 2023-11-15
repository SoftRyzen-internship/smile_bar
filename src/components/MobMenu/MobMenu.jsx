import { Navigation } from '../Navigation';
import { Call } from '../Call';

export const MobMenu = () => {
  return (
    <div className="absolute w-full top-full xl:hidden">
      <Navigation className="mb-12" />
      <Call />
    </div>
  );
};
