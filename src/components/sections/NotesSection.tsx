import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextArea } from '../ui/TextArea';
import type { FormData } from '../../types/form';

export const NotesSection = () => {
  const { register } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <TextArea
        label="Additional Notes"
        {...register('notes')}
        placeholder="Enter any additional observations, recommendations, or follow-up instructions"
        rows={6}
      />
    </div>
  );
};