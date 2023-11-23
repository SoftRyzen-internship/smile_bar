'use client';

import PropTypes from 'prop-types';

import { TabItem } from '../TabItem';

export const TabList = ({ data, isBenefit = false, className }) => {
  return (
    <ul
      className={`${
        isBenefit ? 'max-w-[708px]' : 'max-w-[892px]'
      } ${className}`}
    >
      {data.map((data, index) => (
        <TabItem key={index} isBenefit={isBenefit} data={data} />
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
    link: PropTypes.object,
  }).isRequired,
  className: PropTypes.node,
};
