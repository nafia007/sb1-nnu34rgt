import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxGroup } from '../../ui/CheckboxGroup';

export const DisposalInfo = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Disposal</h3>
      <CheckboxGroup
        options={[
          { label: 'Hospital', value: 'hospital' },
          { label: 'Home', value: 'home' },
          { label: 'GP', value: 'gp' },
          { label: 'Ambulance', value: 'ambulance' },
          { label: 'Car', value: 'car' },
          { label: 'Private Vehicle', value: 'privateVehicle' },
          { label: 'Police', value: 'police' },
          { label: 'Field Wing', value: 'fieldWing' },
        ]}
        {...register('disposal')}
      />
    </div>
  );
};