import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Features/Users/userSlicer';
import { useNavigate } from 'react-router-dom';
import './login.css';
import bg from '../images/loginpage.jpg';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must be a valid @gmail.com or @hotmail.com address');
      return;
    }
    setError('');
    try {
      console.log(email, password);
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {

        const { token } = resultAction.payload;
        localStorage.setItem('token', token);
        console.log("client mai koen aya hai jeee", token);
        navigate('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="body-div-user">
    <div className="login-page-container">
    <div className="login-container">
      <h2 className="welcomeuser">Welcome back User</h2>
      <div className="or-divider">Login via Email</div>
      {error && <div className="error-message">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? 'error-message-input' : ''}
            required
          />
          {error && !email && <div className="error-message">Email is required</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'error-message-input' : ''}
            required
          />
          {error && !password && <div className="error-message">Password is required</div>}
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="sign-up-message">
        If you aren't logged in then <a href="/signup">Sign up</a>
      </div>
    </div>
    <div className="login-image">
      <img src={bg} alt="Login" />
    </div>
  </div>
  </div>
  );
};

export default LoginPage;