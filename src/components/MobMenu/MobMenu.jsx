import { Navigation } from '../Navigation';
import { Call } from '../Call';

export const MobMenu = () => {
  return (
    <div className="absolute w-full top-full">
      <Navigation />
      <Call />
    </div>
  );
};
