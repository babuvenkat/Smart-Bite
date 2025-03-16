import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap styles

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigate('/register');
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || 'Error logging in');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)', // Beautiful gradient
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            style={{ backgroundColor: '#4CAF50', borderRadius: '10px' }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{' '}
          <button onClick={handleSignUp} className="btn btn-link" style={{ textDecoration: 'none', color: '#007BFF' }}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
