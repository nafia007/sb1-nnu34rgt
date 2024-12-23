import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/Input';
import { DynamicList } from '../ui/DynamicList';
import type { MedicalHistory } from '../../types/form';

export const MedicalHistorySection = () => {
  const { register, control } = useFormContext<{ medicalHistory: MedicalHistory }>();

  return (
    <div className="space-y-8">
      <DynamicList
        control={control}
        name="medicalHistory.allergies"
        label="Allergies"
        placeholder="Enter allergy"
      />

      <DynamicList
        control={control}
        name="medicalHistory.medications"
        label="Current Medications"
        placeholder="Enter medication and dosage"
      />

      <DynamicList
        control={control}
        name="medicalHistory.surgeries"
        label="Previous Surgeries"
        placeholder="Enter surgery and date"
      />

      <DynamicList
        control={control}
        name="medicalHistory.chronicConditions"
        label="Chronic Conditions"
        placeholder="Enter condition"
      />

      <DynamicList
        control={control}
        name="medicalHistory.familyHistory"
        label="Family History"
        placeholder="Enter condition and relation"
      />
    </div>
  );
};