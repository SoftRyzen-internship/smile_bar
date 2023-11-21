import { ContactBlock, ContactItem } from '@/components/ContactBlock';
import { Section } from '@/components/Section';
import data from '@/data/contacts.json';
import { CallbackForm } from '@/components/CallbackForm';
import { ToastContainer } from 'react-toastify';

import sectionData from '@/data/contactSection.json';

const { title, contactsBlock } = sectionData;

export const ContactsSection = () => {
  return (
    <Section id="contacts" title={title} className="mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between xl:justify-center gap-[36px] xl:gap-[200px] pt-[20px] md:pt-[24px] md:items-center">
        <ul className="md:w-[198px] xl:w-[271px] flex flex-col items-center md:items-start gap-[22px] md:gap-[36px] ">
          {contactsBlock.map(({ id, title, type }) => (
            <li key={id} className="flex flex-col gap-[10px]">
              <ContactBlock
                title={title}
                items={data.filter(elem => type === elem.type)}
              />
            </li>
          ))}
        </ul>
        <CallbackForm className="md:w-[424px]" />
      </div>
      <ToastContainer
        theme="colored"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </Section>
  );
};
