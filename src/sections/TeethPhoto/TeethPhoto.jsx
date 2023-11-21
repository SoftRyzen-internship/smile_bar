import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import React from 'react';
import data from '../../data/teeth.json';
import { Gallery } from '@/components/Gallery';

export const TeethPhoto = () => {
  return (
    <Section id="Result" title="Результати">
      <Slider>
        <Gallery data={data} />
      </Slider>
    </Section>
  );
};
