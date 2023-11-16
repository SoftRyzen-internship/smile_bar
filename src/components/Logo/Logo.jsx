import React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '/public/logo.svg';

export const Logo = ({
  className = 'w-[68px] h-12 xl:w-[90px] xl:h-[62px]',
}) => {
  return <LogoIcon className={className} />;
};

Logo.propTypes = {
  className: PropTypes.string,
};
