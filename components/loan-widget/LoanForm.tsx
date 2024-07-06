import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import BusinessInformation from './BusinessInformation';
import LoanDetails from './LoanDetails';
import DocumentsUpload from './DocumentsUpload';
import ContactInformation from './ContactInformation';
import CreditScoreSelection from './CreditScoreSelection'; // Import CreditScoreSelection component
import BusinessDurationSelector from './BusinessDurationSelector';
import supabase from '../../utils/supabase/supabaseClient';
import { LoanFormData } from '../../types/types';

const steps = [
  'Personal Information',
  'Business Information',
  'Business Duration',
  'Loan Details',
  'Upload Documents',
  'Contact Information',
  'Credit Score',
];

interface LoanFormProps {
  closeModal: () => void; // Define closeModal prop
}

const LoanForm: React.FC<LoanFormProps> = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<LoanFormData>({
    name: '',
    dob: '',
    address: '',
    creditScore: '',
    company: '',
    incorporationDate: '',
    amountRequested: '',
    businessBankStatements: [],
    ownershipPercentage: '', // Corrected field name
    phone: '',
    email: '',
    website: '',
    ein: '',
    ssn: '',
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFileChange = (files: FileList) => {
    const fileArray = Array.from(files);
    updateFormData('businessBankStatements', fileArray);
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('loan_applications')
        .insert([formData]);

      if (error) {
        console.error('Error submitting form:', error.message);
      } else {
        console.log('Form submitted successfully:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative bg-white rounded-lg p-8" style={{ width: '480px', height: '585.59px' }}>
      <h1 className="relative text-2xl font-bold mb-4 bg-slate-500 text-white p-2 rounded-t-lg" style={{ width: '410px', height: '85.59px' }}>Loan Application</h1>
      

      
      {/* Render Current Step */}
      {currentStep === 0 && <PersonalInformation formData={formData} updateFormData={updateFormData} />}
      {currentStep === 1 && <BusinessInformation formData={formData} updateFormData={updateFormData} />}
      {currentStep === 2 && <BusinessDurationSelector formData={formData} updateFormData={updateFormData} />}                
      {currentStep === 3 && <LoanDetails formData={formData} updateFormData={updateFormData} />}
      {currentStep === 4 && <DocumentsUpload formData={formData} updateFormData={updateFormData} />}
      {currentStep === 5 && <ContactInformation formData={formData} updateFormData={updateFormData} />}
      {currentStep === 6 && <CreditScoreSelection formData={formData} updateFormData={updateFormData} />}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 text-sm rounded-lg transition duration-300 ease-in-out ${currentStep === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`}
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default LoanForm;
