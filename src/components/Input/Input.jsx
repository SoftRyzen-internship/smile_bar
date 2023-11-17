import { phoneNormalize } from '@/utils';
import PropTypes from 'prop-types';

export const Input = ({
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
  const typeIsPhone = type === 'phone';

  const nameRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле",
    minLength: {
      value: 1,
      message: errorMessages.minLength || 'Мінімум 1 символ',
    },
    pattern: {
      value:
        /^(([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*)+([- ](([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*))* ?$/,
      message: errorMessages.pattern || "Невірне ім'я",
    },
  };

  const telRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле'",
    minLength: {
      value: 16,
      message: errorMessages.minLength || 'Повинно бути мінімум 11 цифр ',
    },
  };

  const handleChange = event => {
    const { value } = event.target;
    event.target.value = phoneNormalize(value);
    setValue(name, event.target.value, { shouldValidate: true });
  };

  const onChangeProps = typeIsPhone ? { onChange: handleChange } : {};

  return (
    <label
      className={`flex flex-col gap-[4px] max-w-[296px] text-[16px] leading-[1.25] font-[400] text-primary bg-transparent ${className}`}
    >
      {labelText}
      <input
        className={`py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none ${
          errors[name] && 'text-error'
        }`}
        type={typeIsPhone ? 'tel' : 'text'}
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
      <span className="text-[12px] font-[500] text-error leading-[1.2] h-[15px] self-end">
        {errors[name]?.message}
      </span>
    </label>
  );
};

Input.proptypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['name', 'phone']).isRequired,
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
