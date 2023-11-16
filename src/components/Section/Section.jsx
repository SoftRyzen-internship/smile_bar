import Title from '../Title/Title';
import PropTypes from 'prop-types';

export const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`py-10 ${className}`}>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
