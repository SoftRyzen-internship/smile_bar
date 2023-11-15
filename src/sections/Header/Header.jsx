import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';

const Header = () => {
  return (
    <div className="xl:flex xl:justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
