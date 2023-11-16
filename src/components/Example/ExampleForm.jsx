'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import Input from '../Input/Input';

const LOCALSTORAGE_KEY = 'Example_key';
export const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist(LOCALSTORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' && window.localStorage,
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form
      className="max-w-[424px] px-[64px] py-[36px] rounded-[24px] bg-block "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="name"
        labelText="Ім'я*"
        placeholderText="Іван Іванов"
        type="name"
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          required: "Обовє'язкове поле",
          minLength: 'Мінімум одна буква',
          pattern: "Невірне ім'я",
        }}
      />

      <Input
        name="tel"
        labelText="Телефон*"
        placeholderText="+38 050 123 45 67"
        type="phone"
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          required: "Обовє'язкове поле",
          minLength: 'Мінімум 11 цифр',
        }}
      />
      <Input
        name="message"
        labelText="Повідомлення"
        placeholderText="Ваше повідомлення..."
        type="textarea"
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          maxLength: 'Максімум 500 символів',
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
