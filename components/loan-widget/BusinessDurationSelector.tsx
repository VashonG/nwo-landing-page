import React from 'react';

interface BusinessDurationSelectorProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const BusinessDurationSelector: React.FC<BusinessDurationSelectorProps> = ({ formData, updateFormData }) => {
  const durations = [
    "Less than three months",
    "3 - 5 months",
    "5 - 10 months",
    "10+ months",
    "I haven't registered my business yet"
  ];

  const handleBusinessDurationChange = (duration: string) => {
    updateFormData('businessDuration', duration);
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4">How long has your business been active?</h3>
      <div className="grid grid-cols-2 gap-2">
        {durations.map((duration) => (
          <button
            key={duration}
            className={`w-full h-full rounded-lg border border-gray-200 text-sm leading-6 font-semibold font-sans transition ease-in-out duration-150 ${
              formData.businessDuration === duration ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
            style={{ width: '210px', height: '50px' }}
            onClick={() => handleBusinessDurationChange(duration)}
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusinessDurationSelector;
