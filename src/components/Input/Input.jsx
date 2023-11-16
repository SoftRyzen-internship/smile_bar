import { phoneNormalize, textareaNormalize } from '@/utils';
import PropTypes from 'prop-types';

const Input = ({
  labelText = '',
  placeholderText = '',
  name,
  type,
  setValue,
  errors,
  register,
  errorMessages,
  className = '',
}) => {
  const nameRegisterValidation = {
    required: errorMessages.required || 'Required',
    minLength: {
      value: 1,
      message: errorMessages.minLength || 'Min lenght is 1',
    },
    pattern: {
      value:
        /^(([A-Za-zА-Яа-яЇїІіЄєҐґ])+('[A-Za-zА-Яа-яЇїІіЄєҐґ]+)*){2,}([- ](([A-Za-zА-Яа-яЇїІіЄєҐґ])+('[A-Za-zА-Яа-яЇїІіЄєҐґ]+)*))* ?$/,
      message: errorMessages.pattern || 'Incorrect value',
    },
  };

  const telRegisterValidation = {
    required: errorMessages.required || 'Required',
    minLength: {
      value: 16,
      message: errorMessages.minLength || 'Minimum 11 digits',
    },
  };

  const textareaRegisterValidation = {
    required: errorMessages.required || 'Required',
    maxLength: {
      value: 500,
      message: errorMessages.maxLength || 'Maximum 500 symbols',
    },
  };

  const gethandleChange = normalizeMethod => {
    const handleChange = event => {
      const { value } = event.target;
      event.target.value = normalizeMethod(value);
      setValue(name, event.target.value, { shouldValidate: true });
    };
    return handleChange;
  };
  const onChangeProps =
    type === 'phone'
      ? { onChange: gethandleChange(phoneNormalize) }
      : type === 'textarea'
        ? { onChange: gethandleChange(textareaNormalize) }
        : {};

  return (
    <div
      className={`flex flex-col gap-[4px] max-w-[296px] text-[16px] leading-[1.25] font-[400] text-primary bg-transparent ${className}`}
    >
      <label htmlFor={name}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea
          className={`h-[169px] py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none ${
            errors[name] && 'text-error'
          }`}
          id={name}
          name={name}
          {...register(name, { ...textareaRegisterValidation })}
          {...onChangeProps}
        ></textarea>
      ) : (
        <input
          className={`py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none ${
            errors[name] && 'text-error'
          }`}
          type="text"
          id={name}
          name={name}
          placeholder={placeholderText}
          {...register(
            name,
            type === 'phone'
              ? { ...telRegisterValidation }
              : { ...nameRegisterValidation },
          )}
          {...onChangeProps}
          noValidate
          autoComplete="off"
        />
      )}
      <p className="text-[12px] font-[500] text-error leading-[1.2] h-[15px] self-end">
        {errors[name]?.message}
      </p>
    </div>
  );
};

Input.proptypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['name', 'phone', 'textarea']).isRequired,
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

export default Input;
