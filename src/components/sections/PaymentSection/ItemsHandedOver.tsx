import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxGroup } from '../../ui/CheckboxGroup';

export const ItemsHandedOver = () => {
  const { register } = useFormContext();

  const items = [
    { label: 'Medical Report', value: 'medicalReport' },
    { label: 'Patient Notes', value: 'patientNotes' },
    { label: 'Serial Forms', value: 'serialForms' },
    { label: 'Medications', value: 'medications' },
    { label: 'Patient ID', value: 'patientId' },
    { label: 'Case Sheet', value: 'caseSheet' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Items Handed Over</h3>
      <div className="border rounded-lg p-4">
        <CheckboxGroup
          options={items}
          {...register('itemsHandedOver')}
        />
      </div>
    </div>
  );
};