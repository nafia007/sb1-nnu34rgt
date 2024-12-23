import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxGroup } from '../../ui/CheckboxGroup';

export const ServiceLevels = () => {
  const { register } = useFormContext();

  const serviceOptions = [
    { label: 'ALS', value: 'als' },
    { label: 'ECG Analysis', value: 'ecgAnalysis' },
    { label: 'IV/IO by Doctor', value: 'ivioByDoctor' },
    { label: 'BVM Ventilation', value: 'bvmVentilation' },
    { label: 'Chest Drains', value: 'chestDrains' },
    { label: 'Early', value: 'early' },
    { label: 'Dressing/Bandage', value: 'dressingBandage' },
    { label: 'Oral Glucose', value: 'oralGlucose' },
    { label: 'Suction', value: 'suction' },
    { label: 'CPR', value: 'cpr' },
    { label: 'Spinal Immob', value: 'spinalImmob' },
    { label: 'Splinting', value: 'splinting' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Service Level</h3>
      <CheckboxGroup
        options={serviceOptions}
        {...register('serviceLevels')}
      />
    </div>
  );
};