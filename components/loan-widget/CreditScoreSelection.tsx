import React from 'react';

interface CreditScoreSelectorProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const CreditScoreSelector: React.FC<CreditScoreSelectorProps> = ({ formData, updateFormData }) => {
  const creditScores = [
    "449 or below",
    "450 - 499",
    "500 - 549",
    "550 - 599",
    "600 - 649",
    "650 - 719",
    "720 or above",
    "Unsure"
  ];

  const handleCreditScoreChange = (score: string) => {
    updateFormData('creditScore', score);
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4">Personal Credit Score</h3>
      <div className="grid grid-cols-2 gap-2">
        {creditScores.map((score) => (
          <button
            key={score}
            className={`w-full h-full rounded-lg border border-gray-200 text-sm leading-6 font-semibold font-sans transition ease-in-out duration-150 ${
              formData.creditScore === score ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
            style={{ width: '210px', height: '50px' }}
            onClick={() => handleCreditScoreChange(score)}
          >
            {score}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreditScoreSelector;
