import { Title } from '../Title';
import PropTypes from 'prop-types';

export const Section = ({
  id = '',
  title,
  children,
  className = '',
  classToTitle,
}) => {
  return (
    <section id={id} className={`py-[18px] md:py-6 xl:py-10 ${className}`}>
      <div
        className={`container max-w-[100vw] sm:max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] relative ${id}`}
      >
        <Title className={classToTitle}>{title}</Title>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classToTitle: PropTypes.string,
};
