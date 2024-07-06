import React, { useState, useEffect } from 'react';

interface LoanDetailsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ formData, updateFormData }) => {
  const [loanAmount, setLoanAmount] = useState(formData.amountRequested || 1000);

  useEffect(() => {
    updateFormData('amountRequested', loanAmount);
  }, [loanAmount]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanAmount(parseInt(event.target.value));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Loan Details</h2>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 mr-2">Loan Amount:</span>
        <span className="font-bold">${loanAmount}</span>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={loanAmount}
          onChange={handleSliderChange}
          className="w-full h-2 mt-2 rounded-lg appearance-none bg-transparent"
        />
      </div>
      <div className="h-2 bg-gray-500 rounded-lg mt-2">
        <div className="h-full bg-blue-500" style={{ width: `${(loanAmount / 100000) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default LoanDetails;
