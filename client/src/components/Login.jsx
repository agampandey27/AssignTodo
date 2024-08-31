import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://assign-todo-six.vercel.app/api/auth/login', {
        email,
        password,
      });

      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      setError(error.response?.data?.msg || 'Login failed');
      console.error('Error:', error.response?.data?.msg || error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
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
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;