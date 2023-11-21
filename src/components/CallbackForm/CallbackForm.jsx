'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { Input } from '../Input';
import { InputMessage } from '../InputMessage';
import { Button } from '../Button';
import { sendTelegramMessage } from '@/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import messages from '@/data/telegram.json';
import sectionData from '@/data/contactSection.json';

const { title, contactsBlock } = sectionData;

const LOCAL_STORAGE_KEY = 'callback';

const {
  callbackForm: { name, phone, message, buttonSubmit },
} = sectionData;

export const CallbackForm = ({ className }) => {
  const [isPending, setIsPending] = useState(false);
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
    try {
      setIsPending(true);
      await toast.promise(sendTelegramMessage(data), {
        pending: {
          render() {
            return messages.queryPending;
          },
          type: 'info',
        },
        success: {
          render() {
            reset();
            return messages.queryResolved;
          },
        },
        error: {
          render({ data }) {
            return `${messages.queryRejected}: ${data.message}`;
          },
        },
      });
      setIsPending(false);
    } catch {
      setIsPending(false);
    }
  };

  return (
    <>
      <form
        className={`flex flex-col max-w-[424px] p-[16px] md:px-[64px] md:py-[36px] rounded-[24px] bg-block ${className}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className="mb-[-3px]"
          name="name"
          labelText={name.labelText}
          placeholderText={name.placeholderText}
          type="name"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={name.errorMessages}
        />

        <Input
          className="mb-[-3px]"
          name="phone"
          labelText={phone.labelText}
          placeholderText={phone.placeholderText}
          type="phone"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={phone.errorMessages}
        />
        <InputMessage
          className="mb-[-3px]"
          name="message"
          labelText={message.labelText}
          placeholderText={message.placeholderText}
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={message.errorMessages}
        />

        <Button
          className="w-full md:w-[147px] mt-[5px] md:ml-auto"
          disabled={isPending}
        >
          {buttonSubmit.labelText}
        </Button>
      </form>
    </>
  );
};
