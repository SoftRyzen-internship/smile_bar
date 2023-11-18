'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { Input } from '../Input';
import { InputMessage } from '../InputMessage';
import { Button } from '../Button';
import { sendTelegramMessage } from '@/utils';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOCAL_STORAGE_KEY = 'callback';

export const CallbackForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist(LOCAL_STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' && window.localStorage,
  });

  const onSubmit = async data => {
    console.log(data);

    toast.promise(sendTelegramMessage(data), {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯',
    });
    // try {
    //   await sendTelegramMessage(data);
    //   reset();
    // } catch (error) {
    //   console.log(`Помилка: ${error}`);
    // }
  };

  return (
    <>
      {' '}
      <form
        className={`flex flex-col max-w-[424px] p-[16px] md:px-[64px] md:py-[36px] rounded-[24px] bg-block ${className}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className="mb-[-3px]"
          name="name"
          labelText="Ім'я*"
          placeholderText="Іван Іванов"
          type="name"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={{
            required: "Обов'язкове поле",
            minLength: 'Мінімум одна буква',
            maxLength: 'Максимум 70 символів',
            pattern: "Невірне ім'я",
          }}
        />

        <Input
          className="mb-[-3px]"
          name="phone"
          labelText="Телефон*"
          placeholderText="+38 050 123 45 67"
          type="phone"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={{
            required: "Обов'язкове поле",
            minLength: 'Мінімум 11 цифр',
          }}
        />
        <InputMessage
          className="mb-[-3px]"
          name="message"
          labelText="Повідомлення"
          placeholderText="Ваше повідомлення..."
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={{
            maxLength: 'Максимум 500 символів',
          }}
        />

        {/* <button type="submit">Submit</button> */}
        <Button
          className="w-full md:w-[147px] mt-[5px] md:ml-auto"
          label={'Відправити'}
        ></Button>
      </form>
      <ToastContainer />
    </>
  );
};
