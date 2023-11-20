'use client';

import { Procedure } from '@/components/Procedure/Procedure';
import { ProcedureList } from '@/components/ProcedureList/ProcedureList';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import React, { useEffect, useState } from 'react';
import { getServices } from '../../../sanity/fetch';

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
        В нашій студії доступні три варіанти процедур відбілювання зубів, кожен
        з яких дозволяє досягти різного ступеня освітлення.
      </p>
      <Slider className="notCentral" centralMode={false} infinite={false}>
        {allService &&
          allService.map(service => (
            <Procedure key={service.title} service={service} />
          ))}
      </Slider>
      <p className="pt-4 text-center text-primary text-xl">
        Незалежно від обраного типу процедури, ми гарантуємо найвищий стандарт
        якості та безпеки. Довірте свою усмішку нашим досвідченим стоматологам
        та обирайте той результат, який найбільше вам до вподоби.
      </p>
    </Section>
  );
};
