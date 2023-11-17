import PropTypes from 'prop-types';

export const Button = ({ label, disabled = false, className = '' }) => {
  return (
    <button
      type="submit"
      className={`rounded-lg transition duration-300 ease-in  bg-btn hover:bg-btnHover  focus:bg-btnHover cursor-pointer py-3 px-6 text-base font-medium ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
