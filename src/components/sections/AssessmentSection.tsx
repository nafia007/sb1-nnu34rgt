import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { DynamicList } from '../ui/DynamicList';
import { FormRow } from '../ui/FormRow';
import type { Assessment } from '../../types/form';

export const AssessmentSection = () => {
  const { register, control } = useFormContext<{ assessment: Assessment }>();

  return (
    <div className="space-y-6">
      <TextArea
        label="Chief Complaint"
        {...register('assessment.chiefComplaint')}
        required
      />

      <DynamicList
        control={control}
        name="assessment.symptoms"
        label="Symptoms"
        placeholder="Enter symptom"
      />

      <FormRow>
        <Input
          label="Duration"
          {...register('assessment.duration')}
          placeholder="e.g., 3 days"
          required
        />
        <Input
          label="Severity (1-10)"
          type="number"
          min="1"
          max="10"
          {...register('assessment.severity')}
          required
        />
      </FormRow>

      <TextArea
        label="Diagnosis"
        {...register('assessment.diagnosis')}
        required
      />

      <TextArea
        label="Treatment Plan"
        {...register('assessment.treatment')}
        required
      />

      <DynamicList
        control={control}
        name="assessment.prescriptions"
        label="Prescriptions"
        placeholder="Enter medication, dosage, and instructions"
      />
    </div>
  );
};