import React from 'react';

interface BusinessInformationProps {
    formData: any;
    updateFormData: (field: string, value: any) => void;
  }
  
  const BusinessInformation: React.FC<BusinessInformationProps> = ({ formData, updateFormData }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Business Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.company}
          onChange={(e) => updateFormData('company', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">EIN</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.ein}
          onChange={(e) => updateFormData('ein', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="url"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.website}
          onChange={(e) => updateFormData('website', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ownership Percentage</label>
        <input
          type="number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.ownershipPercentage}
          onChange={(e) => updateFormData('ownershipPercentage', e.target.value)}
        />
      </div>
    </div>
  );
};

export default BusinessInformation;
