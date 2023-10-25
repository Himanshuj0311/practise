// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
