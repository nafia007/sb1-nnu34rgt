import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { FormRow } from '../../ui/FormRow';

export const MedicalAid = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Medical Aid</h3>
      <div className="border rounded-lg p-4 space-y-4">
        <FormRow>
          <Input
            label="Medical Aid Name"
            {...register('medicalAid.name')}
          />
          <Input
            label="Plan"
            {...register('medicalAid.plan')}
          />
        </FormRow>
        <FormRow>
          <Input
            label="Member Number"
            {...register('medicalAid.memberNumber')}
          />
          <Input
            label="Main Member"
            {...register('medicalAid.mainMember')}
          />
        </FormRow>
      </div>
    </div>
  );
};