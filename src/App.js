// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import OnBoardServices from './OnBoardServices';
import Home from'./Home';
import Contact from './Contact';
import CruiseBookingForm from './CruiseBookingForm';
import Logout from './Logout';
import AboutUs from './AboutUs';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OnBoardServices" element={<OnBoardServices />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Aboutus" element={<AboutUs/>}/>
          <Route path="/CruiseBookingForm" element={<CruiseBookingForm />}/>
          <Route path="/Logout" element={<Logout/>} />
          {/* Define other routes here */}
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
