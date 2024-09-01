import classes from "./busInfo.module.css";
export default function BusInfo({ busNumber, arrivalTime, departureTime }) {
  return (
    <>
      <div className={classes.busInfoContainer}>
        <div className={classes.busInfoHeader}>Bus Information</div>
        <div className={classes.busInfo}>
          <div className={classes.infoItem}>
            <span className={classes.label}>Bus Number:</span>
            <span className={classes.value}>{busNumber}</span>
          </div>
          <div className={classes.infoItem}>
            <span className={classes.label}>Arrival Time:</span>
            <span className={classes.value}>{arrivalTime}</span>
          </div>
          <div className={classes.infoItem}>
            <span className={classes.label}>Departure Time:</span>
            <span className={classes.value}>{departureTime}</span>
          </div>
        </div>
      </div>
    </>
  );
}
