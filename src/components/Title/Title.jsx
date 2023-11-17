import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return (
    <h2 className="text-center text-primary text-2xl font-bold uppercase md:text-[32px] lg:text-[40px]">
      {children}
    </h2>
  );
};
Title.propTypes = {
  children: PropTypes.node.isRequired,
};
