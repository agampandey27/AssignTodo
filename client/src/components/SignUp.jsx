import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://assign-todo-six.vercel.app/api/auth/register', {
        username,
        email,
        password,
      });

      alert('Sign up successful! You can now log in.');
      onSuccess(response.data.token); 
    } catch (error) {
      if (error.response) {
        const errorMsg = error.response.data.msg || 'Sign up failed. Please try again.';
        setError(errorMsg);
      } else {
        setError('Sign up failed. Please try again.');
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        disabled={loading} 
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        disabled={loading} 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        disabled={loading} 
      />
      {error && <p className="text-red-500">{error}</p>}
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading} 
      >
        {loading ? 'Signing up...' : 'Sign Up'} 
      </button>
    </form>
  );
};

export default SignUp;
