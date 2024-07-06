import type { NextPage } from 'next';
import Head from 'next/head';
import LoanApplicationModal from '@/components/loan-widget/LoanApplicationModal';

export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Loan Application</title>
        <meta name="description" content="A multi-step loan application form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <LoanApplicationModal />
      </main>
    </div>
  );
};

export default SignUp;
