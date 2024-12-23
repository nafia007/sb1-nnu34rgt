import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormProgress } from './components/FormProgress';
import { FormSection } from './components/FormSection';
import { PatientInfoSection } from './components/sections/PatientInfoSection';
import { VitalSignsSection } from './components/sections/VitalSignsSection';
import { MedicalHistorySection } from './components/sections/MedicalHistorySection';
import { AssessmentSection } from './components/sections/AssessmentSection';
import { NotesSection } from './components/sections/NotesSection';
import { Button } from './components/ui/Button';
import { FileText, Mail, AlertCircle } from 'lucide-react';
import type { FormData } from './types/form';
import { generatePDF } from './utils/pdfGenerator';
import { sendFormEmail } from './utils/emailService';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      const pdfBlob = await generatePDF(data);
      // Handle PDF download and email sending
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const sections = [
    {
      title: 'Patient Information',
      component: <PatientInfoSection />,
    },
    {
      title: 'Vital Signs',
      component: <VitalSignsSection />,
    },
    {
      title: 'Medical History',
      component: <MedicalHistorySection />,
    },
    {
      title: 'Assessment',
      component: <AssessmentSection />,
    },
    {
      title: 'Additional Notes',
      component: <NotesSection />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Patient Report Form</h1>
            <div className="flex space-x-4">
              <Button
                variant="secondary"
                icon={FileText}
                onClick={handleSubmit(async (data) => {
                  const pdfBlob = await generatePDF(data);
                  const url = URL.createObjectURL(pdfBlob);
                  window.open(url);
                })}
              >
                Save as PDF
              </Button>
              <Button
                variant="secondary"
                icon={Mail}
                onClick={handleSubmit(async (data) => {
                  // Implement email sending logic
                })}
              >
                Send via Email
              </Button>
            </div>
          </div>

          <FormProgress currentStep={currentStep} totalSteps={sections.length} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  currentStep === index ? 'block' : 'hidden'
                }`}
              >
                <FormSection
                  title={section.title}
                  onNext={() => setCurrentStep(currentStep + 1)}
                  onBack={() => setCurrentStep(currentStep - 1)}
                  onSave={() => console.log('Saving draft...')}
                  onSubmit={handleSubmit(onSubmit)}
                  isFirst={index === 0}
                  isLast={index === sections.length - 1}
                >
                  {section.component}
                </FormSection>
              </div>
            ))}
          </form>

          {methods.formState.errors && Object.keys(methods.formState.errors).length > 0 && (
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-700">Please fix the errors above</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </FormProvider>
  );
}

export default App;