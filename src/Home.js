import React from 'react';
import './Home.css'; 

function Home() {
    return (
      <div className="Home">
        <h2>DISCOVER THE WORLD</h2>
        <h1>Visit <span class="changecontent"></span></h1>
        <a href="http://localhost:3000" className="button-link">
  Book a ticket
</a>
      </div>
    );
  }
  
  export default Home;
  