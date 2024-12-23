import React from 'react';

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  onChange?: (values: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => {
              const value = e.target.value;
              const checked = e.target.checked;
              onChange?.(checked ? [value] : []);
            }}
            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};