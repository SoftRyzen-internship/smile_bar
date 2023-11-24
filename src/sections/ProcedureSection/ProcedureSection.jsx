'use client';

import { Procedure } from '@/components/Procedure';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import React, { useEffect, useState } from 'react';
import { getServices } from '../../../sanity/fetch';
import procedure from '@/data/procedure.json';

export const ProcedureSection = () => {
  const [allService, setAllService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      const getAllServices = await getServices();
      setAllService(getAllServices);
      setIsLoading(false);
    };
    setIsLoading(true);
    get();
  }, []);

  return (
    !isLoading && (
      <Section id="Procedure" title="ПОСЛУГИ">
        <p className="md:w-[642px] xl:w-[860px] mx-auto pt-4 text-center text-primary text-lg md:text-xl xl:text-2xl">
          {procedure.map(item => item.description)}
        </p>
        <Slider className="notCentral" centralMode={false} infinite={false}>
          {allService.length > 0 &&
            allService.map(service => (
              <Procedure key={service.title} service={service} />
            ))}
        </Slider>
        <p className="md:w-[623px] xl:w-[860px] mx-auto pt-4 text-center text-primary text-base xl:text-xl">
          {procedure.map(item => item.promis)}
        </p>
      </Section>
    )
  );
};
