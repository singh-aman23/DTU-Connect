// nearBus.js
import { useState } from 'react';
import classes from './nearBus.module.css';

export default function NearBus({ busNumber, arrivalTime, departureTime }) {
  const [mapOpen, setMapOpen] = useState(false);

  const busLocation = {
    lat: 28.7041, 
    lng: 77.1025  
  };

  const openMap = () => {
    setMapOpen(true);
  };

  const closeMap = () => {
    setMapOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.busNumber}>{busNumber}</div>
        <div className={classes.timingsContainer}>
          <div className={classes.arrival}>Arrival <span className={classes.arrivalTime}>{arrivalTime}</span></div>
          <div className={classes.departure}>Departure <span className={classes.departureTime}>{departureTime}</span></div>
        </div>
        <button onClick={openMap} className={classes.mapButton}>Show on Map</button>
      </div>

      {mapOpen && (
        <div className={classes.mapModal}>
          <button onClick={closeMap} className={classes.closeButton}>Close</button>
          <div className={classes.mapContainer}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=${busLocation.lat},${busLocation.lng}&key=AIzaSyDiDR5AcMSyWYM0tUJaLk-qXhypfZ7B9bg`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
