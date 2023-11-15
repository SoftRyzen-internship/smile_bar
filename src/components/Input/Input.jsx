import phoneNormalize from '@/utils';
import PropTypes from 'prop-types';

const Input = ({
  labelText,
  placeholderText,
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
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
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
      />
      <p>{errors[name]?.message}</p>
    </div>
  );
};

export default Input;
