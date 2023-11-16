'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from '../TabItem/TabItem';

export const TabList = ({ data, type }) => {
  const [open, setOpen] = useState(false);

  const toggle = index => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <ul>
      {data.map((data, index) => (
        <TabItem
          key={index}
          open={index === open}
          type={type}
          data={data}
          toggle={() => toggle(index)}
        />
      ))}
    </ul>
  );
};

TabItem.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addition: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    link: PropTypes.string,
  }).isRequired,
};

