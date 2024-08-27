import React, { useState } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const LoginPage = ({ setToken, navigate }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpSuccess = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/'); // Navigate to home or another page on successful sign-up
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {showSignUp ? 'Sign Up' : 'Login'}
        </h2>
        {showSignUp ? (
          <>
            <SignUp onSuccess={handleSignUpSuccess} />
            <p className="text-center mt-4">
              Already have an account?{' '}
              <button
                onClick={() => setShowSignUp(false)}
                className="text-blue-500"
              >
                Login here
              </button>
            </p>
          </>
        ) : (
          <>
            <Login setToken={setToken} />
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => setShowSignUp(true)}
                className="text-blue-500"
              >
                Sign up here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
