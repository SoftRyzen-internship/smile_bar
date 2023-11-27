import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import labelLogo from '@/data/labelLogo.json';

export const Logo = ({ className, isShowMenu = false, onCloseMenu = null }) => {
  return (
    <Link
      className={className}
      href="/"
      aria-label={labelLogo.map(item => item.aria_label)}
      onClick={isShowMenu ? onCloseMenu : null}
    >
      <Image
        src="/logo.svg"
        className="w-[68px] h-12 xl:w-[90px] xl:h-[62px]"
        width={90}
        height={62}
        alt={labelLogo.map(item => item.alt)}
      />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  isShowMenu: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};
