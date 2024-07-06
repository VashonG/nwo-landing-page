'use client'
import React, { useState } from 'react';
import LoanForm from './LoanForm'; // Make sure to adjust the path if necessary

const LoanApplicationModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Open Loan Application
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-8 w-full max-w-lg">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl">×</button>
            <LoanForm closeModal={closeModal} /> {/* Pass closeModal function as prop */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanApplicationModal;
