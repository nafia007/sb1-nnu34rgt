import React from 'react';

interface FormRowProps {
  children: React.ReactNode;
}

export const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  );
};