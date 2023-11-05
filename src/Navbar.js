import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link to navigate to the home page */}
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Use Link to navigate to the login page */}
        </li>
       <li>
        <Link to="/AboutUs">AboutUs</Link>
       </li>
      </ul>
    </nav>
  );
}

export default Navbar;
