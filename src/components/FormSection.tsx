import React from 'react';
import { ArrowLeft, ArrowRight, Save, Send } from 'lucide-react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  onSave?: () => void;
  onSubmit?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  onNext,
  onBack,
  onSave,
  onSubmit,
  isFirst,
  isLast,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="space-y-6">{children}</div>
      <div className="flex justify-between mt-8">
        <div>
          {!isFirst && (
            <button
              onClick={onBack}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onSave}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </button>
          {isLast ? (
            <button
              onClick={onSubmit}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSection;