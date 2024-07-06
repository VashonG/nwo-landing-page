import React from 'react';

interface ContactInformationProps {
    formData: any;
    updateFormData: (field: string, value: any) => void;
  }
  
  const ContactInformation: React.FC<ContactInformationProps> = ({ formData, updateFormData }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Contact Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">SSN</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.ssn}
          onChange={(e) => updateFormData('ssn', e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactInformation;
