// Contact.js
import React from 'react';
import './Contact.css';
import fb from './assets/fb.png';
import download from './assets/download.png';
import twitter from './assets/twitteer.png';
import utube from './assets/utube.png';

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <strong>Email:</strong> kirsa@example.com
            </li>
            <li>
              <strong>Phone:</strong> 987654321
            </li>
          </ul>
        </div>
        
        <div className="social-media">
        <h2>Follow Us</h2>
          <div className="social-links">
            <div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={download} alt="Instagram" />
              {/* <h4>Instagram Profile: @cruise_insta</h4> */}
            </a>
            </div>
            
            
            <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
              {/* <h4>Facebook Profile: @cruise_facebook</h4> */}
            </a>
            </div>
            <div>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitteer" />
              {/* <h4>Instagram Profile: @cruise_insta</h4> */}
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={utube} alt="Instagram" />
              {/* <h4>Instagram Profile: @cruise_insta</h4> */}
            </a>
            </div>
            
          </div>
        </div>
      </div>
      
      <footer className="contact-footer">
        <h3>&copy;2023 Cruise Management System. All rights reserved.</h3>
      </footer>
    </div>
  );
}

export default Contact;
