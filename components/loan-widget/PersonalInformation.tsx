import React from 'react';

interface PersonalInformationProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ formData, updateFormData }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          className="mt-1 block w-full"
          value={formData.dob}
          onChange={(e) => updateFormData('dob', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          className="mt-1 block w-full"
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
