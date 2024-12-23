import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { FormRow } from '../../ui/FormRow';

export const HandoverDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Handover/Disposal</h3>
      <div className="border rounded-lg p-4 space-y-4">
        <FormRow>
          <Input
            label="Facility Name"
            {...register('handover.facilityName')}
          />
          <Input
            label="Staff Name"
            {...register('handover.staffName')}
          />
        </FormRow>
        <Input
          label="Name of Practitioner"
          {...register('handover.practitionerName')}
        />
        <FormRow>
          <Input
            label="Registration No."
            {...register('handover.registrationNo')}
          />
          <Input
            label="Signature"
            {...register('handover.signature')}
          />
        </FormRow>
      </div>
    </div>
  );
};