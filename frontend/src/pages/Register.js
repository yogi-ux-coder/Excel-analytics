import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
// import './Login.css'; // Reuse same CSS for styling

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      const res = await api.post('http://localhost:3000/api/auth/register', formData);
      setMessage(res.data.message);
      // Redirect to login after short delay
      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      console.error('Register error:', error.response?.data || error.message);
      setMessage(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return(
  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create a New Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-200"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>

        {message && (
          <p className="text-center text-red-600 text-sm mt-2">{message}</p>
        )}
      </form>
    </div>
  </div>
  );
};

export default Register;
