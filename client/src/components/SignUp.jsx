import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Basic validation
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await axios.post('https://assign-todo-six.vercel.app/api/auth/register', {
        username,
        email,
        password,
      });
      alert('Sign up successful! You can now log in.');
    } catch (error) {
      // Assuming the backend sends a specific error message
      if (error.response) {
        // Handle different error responses
        const errorMsg = error.response.data.msg || 'Sign up failed. Please try again.';
        setError(errorMsg);
      } else {
        setError('Sign up failed. Please try again.');
      }
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
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
    </form>
  );
};

export default SignUp;
