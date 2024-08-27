import React, { useState } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LoginPage = ({ setToken, navigate }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpSuccess = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/'); 
  };

  return (
    <>
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdc57b] px-4">
    <div className="w-full max-w-sm md:max-w-md p-6 md:p-8 bg-[#fdf2d5] rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-4 md:mb-6">
        {showSignUp ? 'Sign Up' : 'Welcome To TODO App!'}
      </h2>
      {showSignUp ? (
        <>
          <SignUp onSuccess={handleSignUpSuccess} />
          <p className="text-center mt-4">
            Already have an account?{' '}
            <button
              onClick={() => setShowSignUp(false)}
              className="text-blue-500 hover:underline"
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
              className="text-blue-500 hover:underline"
            >
              Sign up here
            </button>
          </p>
        </>
      )}
    </div>
    <Footer className="mt-4" />
  </div>
</>

  );
};

export default LoginPage;
