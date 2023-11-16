import phoneNormalize from '@/utils';
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
    required: errorMessages.required || 'Required field',
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
    required: errorMessages.required || 'Required field',
    minLength: {
      value: 16,
      message: errorMessages.minLength || 'Minimum 11 digits',
    },
  };

  const handleChange = event => {
    const { value } = event.target;
    event.target.value = phoneNormalize(value);
    setValue(name, event.target.value, { shouldValidate: true });
  };

  const onChangeProps = type === 'phone' ? { onChange: handleChange } : {};

  return (
    <div
      className={`flex flex-col gap-[4px] max-w-[296px] text-[16px] font-[400] text-primary bg-transparent ${className}`}
    >
      <label htmlFor={name}>{labelText}</label>
      <input
        className="py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none"
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
      <p className="text-[12px] font-[500] text-error leading-[1.2] h-[15px] self-end">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default Input;
