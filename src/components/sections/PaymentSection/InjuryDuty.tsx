import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../ui/Input';

export const InjuryDuty = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Injury on Duty (IOD)</h3>
      <div className="border rounded-lg p-4 space-y-4">
        <Input
          label="Company Name"
          {...register('injuryDuty.companyName')}
        />
        <Input
          label="Company Address"
          {...register('injuryDuty.companyAddress')}
        />
        <Input
          label="Company Contact"
          {...register('injuryDuty.companyContact')}
        />
      </div>
    </div>
  );
};