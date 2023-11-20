import { Procedure } from '@/components/Procedure/Procedure';
import { ProcedureList } from '@/components/ProcedureList/ProcedureList';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import React from 'react';

export const ProcedureSection = () => {
  return (
    <Section title="Title">
      <Slider className="notCentral" centralMode={false} infinite={false}>
        <ProcedureList />
      </Slider>
    </Section>
  );
};
