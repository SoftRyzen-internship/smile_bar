import PropTypes from 'prop-types';

export const Title = ({ className = '', children }) => {
  return (
    <h2
      className={`text-center text-primary text-2xl font-bold uppercase md:text-[32px] xl:text-[40px] ${className}`}
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
