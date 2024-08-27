import React from 'react';
import SignUp from '../components/SignUp';

const SignUpPage = ({ setToken }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <SignUp setToken={setToken} />
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
