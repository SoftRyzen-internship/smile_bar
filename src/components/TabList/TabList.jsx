'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { TabItem } from '../TabItem';
import { Tab } from '@headlessui/react';

export const TabList = ({ data, isBenefit = false, className, height }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group manual selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List
        as="ul"
        className={`${
          isBenefit ? 'max-w-[708px]' : 'max-w-[892px]'
        } ${className}`}
      >
        {data.map((data, index) => (
          <TabItem
            key={index}
            isBenefit={isBenefit}
            data={data}
            height={height}
          />
        ))}
      </Tab.List>
    </Tab.Group>
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
