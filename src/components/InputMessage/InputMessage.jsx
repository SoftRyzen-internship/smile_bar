import { textareaNormalize } from '@/utils';
import PropTypes from 'prop-types';

export const InputMessage = ({
  labelText = '',
  placeholderText = '',
  name,
  setValue,
  errors,
  register,
  errorMessages,
  className = '',
}) => {
  const handleChange = event => {
    const { value } = event.target;
    event.target.value = textareaNormalize(value);
    setValue(name, event.target.value, { shouldValidate: true });
  };

  return (
    <label
      className={`flex flex-col gap-[4px] text-[16px] leading-[1.25] font-[400] text-primary bg-transparent ${className}`}
    >
      {labelText}
      <textarea
        className={`w-full h-[169px] py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none resize-none ${
          errors[name] && 'text-error'
        }`}
        id={name}
        name={name}
        rows={'8'}
        cols={'25'}
        placeholder={placeholderText}
        {...register(name, {
          maxLength: {
            value: 500,
            message: errorMessages.maxLength || 'Максимум 500 символів',
          },
        })}
        onChange={handleChange}
      ></textarea>

      <span className="text-[12px] font-[500] text-error leading-[1.2] h-[15px] self-end">
        {errors[name]?.message}
      </span>
    </label>
  );
};

InputMessage.proptypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func,
  errorMessages: PropTypes.shape({
    required: PropTypes.string,
    minLength: PropTypes.string,
    maxLength: PropTypes.string,
    pattern: PropTypes.string,
  }),
  className: PropTypes.string,
};
