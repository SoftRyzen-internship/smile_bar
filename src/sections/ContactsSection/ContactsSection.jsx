import { ContactBlock, ContactItem } from '@/components/ContactBlock';
import { Section } from '@/components/Section';
import data from '@/data/contacts.json';
import dataBlock from '@/data/contactBlock.json';

export const ContactsSection = () => {
  return (
    <Section id="contacts" title="Звʼяжіться з нами" className="mx-auto">
      {dataBlock.map(({ id, title, type }) => (
        <ContactBlock
          key={id}
          title={title}
          items={data.filter(elem => type === elem.type)}
        />
      ))}
    </Section>
  );
};
