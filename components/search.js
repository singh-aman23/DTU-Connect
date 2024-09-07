import { useEffect, useState } from 'react';
import NearBus from './nearBus';
import classes from './search.module.css';
import SearchForm from './searchForm';

export default function Search() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);

  useEffect(() => {
    const fetchPassengerCount = async () => {
      try {
        const response = await fetch('/api/passengers');
        const data = await response.json();
        setPassengerCount(data.total);
      } catch (err) {
        console.error('Error fetching passenger count:', err);
      }
    };

    fetchPassengerCount();
  }, []);

  const handleSearch = async (startingLocation, endingLocation) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/search?starting_location=${startingLocation}&ending_location=${endingLocation}`
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
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
    <div className={classes.searchWrapper}>
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      {result && (
        <div className={classes.resultContainer}>
          {result.bus.length > 0 ? (
            <ul>
              {result.bus.map((b) => (
                <li className={classes.list} key={b.bus_number}>
                  <NearBus
                    busNumber={b.bus_number}
                    arrivalTime={b.arrival_time}
                    departureTime={b.departure_time}
                    passengerCount={passengerCount} // Pass the count as a prop
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className={classes.noBus}>No buses are available right now</div>
          )}
        </div>
      )}
    </div>
  );
}
