import { Title } from '../Title';
import PropTypes from 'prop-types';

export const Section = ({ id = '', title, children, className = '' }) => {
  return (
    <section id={id} className={`py-[18px] md:py-6 xl:py-10 ${className}`}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};
