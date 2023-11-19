import PropTypes from 'prop-types';

export const Button = ({ label, disabled = true, className = '' }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`rounded-lg transition duration-300 ease-in py-3 px-6 text-base font-medium ${
        disabled
          ? 'cursor-auto bg-btnDisabled'
          : 'bg-btn hover:bg-btnHover cursor-pointer focus:bg-btnHover'
      } ${className} `}
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
