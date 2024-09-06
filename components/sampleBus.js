import classes from './sampleBus.module.css';

export default function SampleBus({ route, arrivingIn, highlight }) {
    return (
        <div className={classes.container}>
            <div className={classes.busNumber}>{route}</div>
            <div className={classes.timingsContainer}>
                <div className={classes.arrival}>
                    Arriving - <span className={highlight ? classes.highlightArrivalTime : classes.arrivalTime}>{arrivingIn}</span>
                </div>
            </div>
        </div>
    );
}
