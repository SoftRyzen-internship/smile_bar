import Image from 'next/image';

import { Section } from '@/components/Section';
import { TabList } from '@/components/TabList';
import benefits from '@/data/benefits';

export const Benefits = () => {
  return (
    <Section title="Переваги Smile Bar">
      <div className="flex mt-6 justify-between items-start">
        <div className="mt-[140px] notXl:hidden">
          <Image src="/smile.svg" width={452} height={311} alt="Smile Bar" />
        </div>
        <TabList data={benefits} isBenefit />
      </div>
    </Section>
  );
};
