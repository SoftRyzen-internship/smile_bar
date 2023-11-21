import { Gallery } from '@/components/Gallery';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import data from '../../data/photoGallery.json';
import React from 'react';

export const PhotoGallery = () => {
  return (
    <Section id="PhotoGallery" title="Фотогалерея">
      <Slider>
        <Gallery data={data} />
      </Slider>
    </Section>
  );
};
