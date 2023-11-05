// src/components/CruiseBookingForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CruiseBookingForm.css';

function CruiseBookingForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [room, setRoom] = useState('');
  const [food, setFood] = useState('');
  const [onboardServices, setOnboardServices] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the booking data to a server or perform other actions
    setIsSubmitted(true);
  };

  return (
    <div className="cruise-booking-form">
      <h2>Book a Cruise</h2>
      {isSubmitted ? (
        <p className="success-message">Booking submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Room:</label>
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Food Selection:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="breakfast"
                  checked={food === 'breakfast'}
                  onChange={() => setFood('breakfast')}
                /> Breakfast
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="lunch"
                  checked={food === 'lunch'}
                  onChange={() => setFood('lunch')}
                /> Lunch
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="dinner"
                  checked={food === 'dinner'}
                  onChange={() => setFood('dinner')}
                /> Dinner
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Onboard Services:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="pool"
                  checked={onboardServices === 'pool'}
                  onChange={() => setOnboardServices('pool')}
                /> Pool Access
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="spa"
                  checked={onboardServices === 'spa'}
                  onChange={() => setOnboardServices('spa')}
                /> Spa Package
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="gym"
                  checked={onboardServices === 'gym'}
                  onChange={() => setOnboardServices('gym')}
                /> Gym Access
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Number of Tickets:</label>
            <input
              type="number"
              value={numberOfTickets}
              onChange={(e) => setNumberOfTickets(e.target.value)}
              min={1}
              required
            />
          </div>
          <div className="form-group">
            <label>Departure Date:</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Arrival Date:</label>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              required
            />
          </div>
          <Link to='//OnBoardServices'>
            <button type="submit">Book Now</button>
          </Link>
        </form>
      )}
    </div>
  );
}

export default CruiseBookingForm;
