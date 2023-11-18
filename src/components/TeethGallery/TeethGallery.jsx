import React from 'react';
import { Gallery } from '../Gallery/Gallery';
import data from '../../data/teeth.json';

export const TeethGallery = () => {
  return <Gallery data={data} />;
};
