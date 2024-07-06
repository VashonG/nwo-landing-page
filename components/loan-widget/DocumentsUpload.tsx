import React, { useState } from 'react';
import { LoanStepProps } from '../../types/types';

const DocumentsUpload: React.FC<LoanStepProps> = ({ formData, updateFormData }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
      updateFormData('businessBankStatements', Array.from(e.target.files));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Documents</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Last 4 Months of Business Bank Statements</label>
        <label className="flex flex-col justify-center w-64 h-48 border-2 border-dashed border-gray-300 items-center text-center p-1.5 text-gray-600 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="text-gray-600">Drag & drop your files here, or click to select files</span>
        </label>
      </div>
    </div>
  );
};

export default DocumentsUpload;
