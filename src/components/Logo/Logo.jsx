import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({ className }) => {
  return (
    <Link className={className} href="/" aria-label="Company logo">
      <Image
        src="./logo.svg"
        className="w-[68px] h-12 xl:w-[90px] xl:h-[62px]"
        width={90}
        height={62}
        alt="Company logo"
      />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};
