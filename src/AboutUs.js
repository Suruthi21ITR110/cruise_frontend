import React from 'react';
import './AboutUs.css';
import abtus from './assets/abtus.jpg';
function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        <b>Cruise ships are floating resorts that offer passengers a luxurious escape, featuring a blend of entertainment, fine dining, and exotic destinations. They provide an opportunity to explore the world's most captivating destinations while enjoying the comforts of a self-contained, mobile paradise..</b>
      </p>
      <div className="image-container">
        <img className='Img' src={abtus} alt="aboutus"/>
      </div>
      <p>
        <b>Cruise ships offer a wide range of facilities, from pools and spas to theaters and gourmet restaurants, ensuring a diverse and enjoyable experience for passengers.</b>
      </p>
      <div className="review">
        <h3>Customer Reviews</h3>
        <p>
         <b>"I had an amazing experience using the cruise management system website! It made booking our dream cruise a breeze, with a user-friendly interface and a wide selection of itineraries. The detailed information about each cruise and the easy-to-navigate booking process made our vacation planning seamless. Plus, the responsive customer support team was always ready to assist. I highly recommend this website for anyone looking to embark on a fantastic cruise adventure."</b>
        </p>
       
      </div>
      {/* Add more reviews and content as needed */}
    </div>
  );
}

export default AboutUs;
