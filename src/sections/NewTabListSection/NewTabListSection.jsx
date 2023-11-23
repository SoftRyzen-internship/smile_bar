import { NewTabList } from '@/components/NewTabList';
import { Section } from '@/components/Section';

export const NewTabListSection = () => {
  return (
    <Section id="questions-new" title="Питання-відповіді" className="mx-auto">
      <NewTabList className="mx-auto mt-5 md:mt-6" />
    </Section>
  );
};
