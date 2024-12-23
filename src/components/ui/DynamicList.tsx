import React from 'react';
import { useFieldArray, Control } from 'react-hook-form';
import { Plus, X } from 'lucide-react';
import { Button } from './Button';

interface DynamicListProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export const DynamicList: React.FC<DynamicListProps> = ({
  control,
  name,
  label,
  placeholder,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...control.register(`${name}.${index}`)}
              placeholder={placeholder}
              className="flex-1 rounded-md border-gray-300 shadow-sm 
                focus:border-blue-500 focus:ring-blue-500"
            />
            <Button
              type="button"
              variant="secondary"
              onClick={() => remove(index)}
              icon={X}
              className="px-2"
            />
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="secondary"
        onClick={() => append('')}
        icon={Plus}
        className="mt-2"
      >
        Add {label}
      </Button>
    </div>
  );
};