import classes from './nearBus.module.css'
export default function NearBus({ busNumber, arrivalTime, departureTime }){
    return <>
         <div className = {classes.container}>
        <div className = {classes.busNumber}>{busNumber}</div>
          <div className={classes.timingsContainer}>
          <div className = {classes.arrival}>Arrival <span className = {classes.arrivalTime}>{arrivalTime}</span></div>
          <div className  = {classes.departure}>Departure <span className = {classes.departureTime}>
          {departureTime}
          </span></div>
          </div>
      </div>
    </>
}