import PropTypes from 'prop-types';

import { TabItem } from '../TabItem';
import { TabItemNew } from '../TabItem/TabItemNew';

export const TabListNew = ({ data, isBenefit = false, className }) => {
  return (
    <ul
      className={`${
        isBenefit ? 'max-w-[708px]' : 'max-w-[892px]'
      } ${className}`}
    >
      {data.map((data, index) => (
        <TabItemNew key={index} isBenefit={isBenefit} data={data} />
      ))}
    </ul>
  );
};

TabListNew.propTypes = {
  isBenefit: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      addition: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      link: PropTypes.object,
    }),
  ).isRequired,
  className: PropTypes.string,
};
