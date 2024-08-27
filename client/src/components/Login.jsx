import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Determines if it's sign-up or login
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp
        ? 'http://localhost:5000/api/auth/register'
        : 'http://localhost:5000/api/auth/login';

      const response = await axios.post(url, {
        email,
        password,
      });

      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);

      // Navigate to the home page upon successful login or sign-up
      navigate('/home');
    } catch (error) {
      setError('Login failed');
      console.error('Error:', error.response?.data?.msg || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
