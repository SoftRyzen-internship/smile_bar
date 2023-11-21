import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import { TeethGallery } from '@/components/TeethGallery';
import React from 'react';

export const TeethPhoto = () => {
  return (
    <Section id="Result" title="Результати">
      <Slider>
        <TeethGallery />
      </Slider>
    </Section>
  );
};
