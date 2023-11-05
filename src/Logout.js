// LogoutPage.js
import React from 'react';
import './Logout.css'; // Import your CSS file

const Logout = () => {
  return (
    <div className="container">
      <h1>Cruise Management System</h1>
      <p>You have been successfully logged out.</p>
      <a href="/Login" className="logout-button">Login Again</a>
    </div>
  );
};

export default Logout;
