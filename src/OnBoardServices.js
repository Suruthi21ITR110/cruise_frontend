import React from 'react';
import './OnBoardServices.css'; 
import Dining from './assets/images.jpg';
import entertainment from './assets/entertainment.jpg';
import spa from './assets/spa.jpg';
import food from './assets/dining.jpg';
function OnBoardServices() {
  return (
    <div className="on-board-services-container">
      <p className='theme'>On-Board Services</p>
      <p className='explore'>Explore the various services available on board during your cruise:</p>
      <div className='cart-box'>
      <div className="service">
        <img src={spa} alt="Spa and Wellness" />
        <h2>Spa and Wellness</h2>
        <p>Relax and rejuvenate at our on-board spa.</p>
      
      </div>
      <div className="service">
        <img src={entertainment} alt="Entertainment Shows" />
        <h2>Entertainment Shows</h2>
        <p>Enjoy live entertainment performances on board.</p>
        
      </div>
      <div className="service">
        <img src={food} alt="Dining Options" />
        <h2>Dining Options</h2>
        <p>Experience a variety of dining options during your cruise.</p>
        
      </div>
      <div className="service">
        <img src={Dining} alt="Recreational Activities" />
        <h2>Recreational Activities</h2>
        <p>Participate in exciting recreational activities on board.</p>
       
      </div>
      </div>
      {/* Add more services */}
    </div>
  );
}

export default OnBoardServices;
