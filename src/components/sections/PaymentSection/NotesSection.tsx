import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextArea } from '../../ui/TextArea';

export const NotesSection = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Notes (Challenges, Delays, Comments)</h3>
      <div className="border rounded-lg p-4">
        <TextArea
          label="Additional Notes"
          placeholder="Enter any challenges, delays, or additional comments..."
          rows={6}
          {...register('notes.comments')}
        />
      </div>
    </div>
  );
};