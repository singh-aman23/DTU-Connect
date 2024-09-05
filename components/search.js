'use client';
import { useState } from "react";
import SearchForm from "./searchForm";
import classes from './search.module.css';
import BusInfo from "./busInfo";

export default function Search() {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSearch = async (startingLocation, endingLocation) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/search?starting_location=${startingLocation}&ending_location=${endingLocation}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    return (
      <>
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        {result && (
          <div>
            {result.bus.length > 0 ? (
              <div>
                <ul>
                  {result.bus.map((b) => (
                    <li className={classes.list} key={b.bus_number}>
                      <BusInfo
                        busNumber={b.bus_number}
                        arrivalTime={b.arrival_time}
                        departureTime={b.departure_time}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className={classes.noBus}>No buses are available right now</div>
            )}
          </div>
        )}
      </>
    );
  }