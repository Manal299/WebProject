import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Features/Users/userSlicer';
import './signup.css';

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long and contain at least one numeric character');
      return;
    }
    setError('');

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('contact', contact);
    if (image) formData.append('image', image);
    formData.append('address', address);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('dob', dob);

    try {
      console.log(formData.get('image'));
      const resultAction = await dispatch(signupUser(formData));
      if (signupUser.fulfilled.match(resultAction)) {
      } else {
        setError('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed', error);
      setError('An error occurred during signup');
    }
  };

  return (
    <div className="bodysignup">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="signup-form" encType="multipart/form-data">
          <div className="form-group">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group full-width">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group full-width">
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="" disabled>Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group full-width">
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
