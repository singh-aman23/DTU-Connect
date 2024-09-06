"use client"; 
import { useState } from "react";
import Search from "./search"; 
import classes from './SearchComponent.module.css';
import SampleBus from "./sampleBus";
import { logout } from "@/actions/auth-actions";

export default function SearchComponent() {
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true); 
    await logout();  
    setIsLoggingOut(false);  
    };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button
          className={classes.logoutButton}
          onClick={handleLogout}
          disabled={isLoggingOut}  
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
      
      {!showSearch && (
        <>
          <button className={classes.button} onClick={() => setShowSearch(true)}>
            Search Your Bus...
          </button>

          <h2 className={classes.subheading}>Nearest Buses...</h2>

          <div className={classes.nearBusContainer}>
            <SampleBus route="Lajpat Nagar to Pitampura" arrivingIn="5 mins" />
            <SampleBus route="Saket to Janakpuri" arrivingIn="10 mins" />
            <SampleBus route="Rohini to Vasant Vihar" arrivingIn="15 mins" highlight={true} />
          </div>
        </>
      )}

      {showSearch && <Search />}
    </div>
  );
}
