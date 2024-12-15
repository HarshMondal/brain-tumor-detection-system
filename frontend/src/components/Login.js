
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import './Login.css';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log('Login successful:', response.data);
            // Navigate to the homepage on successful login, passing user data to the Report page
            navigate('/homepage', { state: { userData: response.data } });
        } catch (error) {
            console.error('Login failed:', error.response);
            setError('Login failed: ' + (error.response.data.error || 'Incorrect email or password'));
        }
    };

    return (
      <div>
      <Header />
      <div className="login-container">
          <div className="card login-card">
              <div className="card-body">
                  <h2 className="login-title">Login</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                      <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      <button type="submit" className="btn login-btn">Login</button>
                      <div className="register-link">
                          Don't have an account? <a href="/register">Register</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    );
}

export default LoginForm;

