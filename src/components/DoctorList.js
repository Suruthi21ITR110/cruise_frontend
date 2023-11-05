import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorList.css"; // Import the CSS file

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-5"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Cruise name : {doctor.firstName}
        </div>
        <div className="card-body">
          <p>
            <b>From : </b> {doctor.specialization}
          </p>
          <p>
            <b>To : </b> {doctor.experience}
          </p>
          <p>
            <b>Price : </b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Departing Time : </b> {doctor.timings[0]}
          </p>
          <p>
            <b>Arrival Time : </b> {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
