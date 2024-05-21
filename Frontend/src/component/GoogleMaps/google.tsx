import React from 'react';
import './google.css';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const MapComponent = () => {
  return (
    <div className="map-container">
      <div className="map-info">
        <h2 className="maph2">Find Us:</h2>
        <br/>
        <p className="Mapinfo">Location</p>
        <p><CiLocationOn /> 852-B Milaad St, Block B</p>
        <p>Faisal Town, Lahore</p>
        <br/>
        <p className="Mapinfo">Contact Info:</p>
        <p><FaPhoneAlt />+92 334 5576339</p>
      </div>
      <div className="map-iframe">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=852-B%20Milaad%20St,%20Block%20B%20Faisal%20Town,%20Lahore+(Bloomila)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
};

export default MapComponent;
