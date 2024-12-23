import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';
import type { PatientInfo } from '../../types/form';

export const PatientInfoSection = () => {
  const { register } = useFormContext<{ patientInfo: PatientInfo }>();

  return (
    <div className="space-y-6">
      <FormRow>
        <Input
          label="First Name"
          {...register('patientInfo.firstName')}
          required
        />
        <Input
          label="Last Name"
          {...register('patientInfo.lastName')}
          required
        />
      </FormRow>

      <FormRow>
        <Input
          label="Date of Birth"
          type="date"
          {...register('patientInfo.dateOfBirth')}
          required
        />
        <Input
          label="Gender"
          {...register('patientInfo.gender')}
          required
        />
      </FormRow>

      <Input
        label="Address"
        {...register('patientInfo.address')}
        required
      />

      <FormRow>
        <Input
          label="Phone"
          type="tel"
          {...register('patientInfo.phone')}
          required
        />
        <Input
          label="Email"
          type="email"
          {...register('patientInfo.email')}
          required
        />
      </FormRow>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
        <FormRow>
          <Input
            label="Name"
            {...register('patientInfo.emergencyContact.name')}
            required
          />
          <Input
            label="Phone"
            type="tel"
            {...register('patientInfo.emergencyContact.phone')}
            required
          />
        </FormRow>
        <Input
          label="Relationship"
          {...register('patientInfo.emergencyContact.relationship')}
          required
        />
      </div>
    </div>
  );
};