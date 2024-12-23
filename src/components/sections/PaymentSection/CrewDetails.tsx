import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../ui/Input';

export const CrewDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Crew Details</h3>
      <div className="grid gap-4">
        <Input
          label="Position"
          {...register('crew.position')}
        />
        <Input
          label="Name"
          {...register('crew.name')}
        />
        <Input
          label="Service No"
          {...register('crew.serviceNo')}
        />
        <Input
          label="Signature"
          {...register('crew.signature')}
        />
      </div>
    </div>
  );
};