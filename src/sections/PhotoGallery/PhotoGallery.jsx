import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import { SmileGallery } from '@/components/SmileGallery';
import React from 'react';

export const PhotoGallery = () => {
  return (
    <Section id="PhotoGallery" title="Фотогалерея">
      <Slider>
        <SmileGallery />
      </Slider>
    </Section>
  );
};
