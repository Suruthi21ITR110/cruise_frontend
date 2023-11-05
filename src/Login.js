import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const initialFormData ={
    name: '',
    dob: '',
    contact: '',
    email: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const submitSuccess=true;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform form validation here (You can use Yup or other libraries)
    // If validation passes, you can submit the form data to your server or perform any other actions
    console.log(formData);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Cruise Management Login</h2>
        {submitSuccess && (
          <div className="alert alert-success" role="alert">
            Submit Successful!
          </div>
        )}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='Enter Name...'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            placeholder='Enter Phone number...'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder='Enter Email-address...'
            onChange={handleInputChange}
            required
          />
        </div>
        <Link to='/CruiseBookingForm'>
        <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
