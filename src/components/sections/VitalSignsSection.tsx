import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';
import type { VitalSigns } from '../../types/form';

export const VitalSignsSection = () => {
  const { register } = useFormContext<{ vitalSigns: VitalSigns }>();

  return (
    <div className="space-y-6">
      <FormRow>
        <Input
          label="Blood Pressure"
          {...register('vitalSigns.bloodPressure')}
          placeholder="120/80"
          required
        />
        <Input
          label="Heart Rate"
          {...register('vitalSigns.heartRate')}
          placeholder="BPM"
          required
        />
      </FormRow>

      <FormRow>
        <Input
          label="Temperature"
          {...register('vitalSigns.temperature')}
          placeholder="°C"
          required
        />
        <Input
          label="Respiratory Rate"
          {...register('vitalSigns.respiratoryRate')}
          placeholder="breaths/min"
          required
        />
      </FormRow>

      <FormRow>
        <Input
          label="Oxygen Saturation"
          {...register('vitalSigns.oxygenSaturation')}
          placeholder="%"
          required
        />
      </FormRow>

      <FormRow>
        <Input
          label="Height"
          {...register('vitalSigns.height')}
          placeholder="cm"
          required
        />
        <Input
          label="Weight"
          {...register('vitalSigns.weight')}
          placeholder="kg"
          required
        />
      </FormRow>
    </div>
  );
};