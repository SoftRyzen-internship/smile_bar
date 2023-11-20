'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from '../TabItem/TabItem';

export const TabList = ({ data, isBenefit = false, className }) => {
  const [open, setOpen] = useState(false);

  const toggle = index => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <ul
      className={`${
        isBenefit ? 'max-w-[708px]' : 'max-w-[892px]'
      } ${className}`}
    >
      {data.map((data, index) => (
        <TabItem
          key={index}
          open={index === open}
          isBenefit={isBenefit}
          data={data}
          toggle={() => toggle(index)}
        />
      ))}
    </ul>
  );
};

TabItem.propTypes = {
  isBenefit: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addition: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    link: PropTypes.string,
  }).isRequired,
  className: PropTypes.node,
};

