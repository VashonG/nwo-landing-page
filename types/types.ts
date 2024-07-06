// types.ts
export interface LoanFormData {
    name: string;
    dob: string;
    address: string;
    creditScore: string;
    company: string;
    incorporationDate: string;
    amountRequested: string;
    businessBankStatements: File[];
    ownershipPercentage: string;
    phone: string;
    email: string;
    website: string;
    ein: string;
    ssn: string;
  }
  
  export interface LoanStepProps {
    formData: LoanFormData;
    updateFormData: (field: string, value: any) => void;
  }
  