'use client';

import { Procedure } from '@/components/Procedure/Procedure';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import React, { useEffect, useState } from 'react';
import { getServices } from '../../../sanity/fetch';
import procedure from '../../data/procedure.json';

export const ProcedureSection = () => {
  const [allService, setAllService] = useState('');

  useEffect(() => {
    const get = async () => {
      const getAllServices = await getServices();
      setAllService(getAllServices);
    };

    get();
  }, []);

  return (
    <Section id="Procedure" title="ПОСЛУГИ">
      <p className=" pt-4 text-center text-primary text-2xl">
        {procedure.map(item => item.description)}
      </p>
      <Slider className="notCentral" centralMode={false} infinite={false}>
        {allService &&
          allService.map(service => (
            <Procedure key={service.title} service={service} />
          ))}
      </Slider>
      <p className="pt-4 text-center text-primary text-xl">
        {procedure.map(item => item.promis)}
      </p>
    </Section>
  );
};
