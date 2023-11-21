import React from 'react';
import { Gallery } from '../Gallery/Gallery';
import data from '../../data/photoGallery.json';

export const SmileGallery = () => {
  return <Gallery data={data} />;
};
