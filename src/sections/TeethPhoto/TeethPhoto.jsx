import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import { TeethGallery } from '@/components/TeethGallery';
import React from 'react';

export const TeethPhoto = () => {
  return (
    <Section title="Результати">
      <Slider>
        <TeethGallery />
      </Slider>
    </Section>
  );
};
