'use client';
import BusInfo from "@/components/busInfo";
import classes from "./page.module.css";
import { useState } from "react";


const SearchForm = ({onSearch, isLoading}) => {
  const [startingLocation, setStartingLocation] = useState('');
  const [endingLocation, setEndingLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(startingLocation, endingLocation);
  };

  return <>
  <form className={classes.form} onSubmit = {handleSubmit}>
        <div className={classes.container}>
          <input
            type="text"
            id="from"
            name="from"
            placeholder="From"
            className={classes.input}
            required
            onChange={(e) => setStartingLocation(e.target.value)}
          />

          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            className={classes.input}
            required
            onChange={(e) => setEndingLocation(e.target.value)}
            />
        </div>
        <button type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      </form>
  </>;
};

export default function Search(){
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (startingLocation, endingLocation) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/search?starting_location=${startingLocation}&ending_location=${endingLocation}`);
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
  return <>
    <SearchForm onSearch = {handleSearch} isLoading={isLoading}/>
    {result && (
      <div>
        {result.bus.length > 0 ? (
          <div>
            <ul>
              {result.bus.map((b) => (<li className = {classes.list} key={b.bus_number}>
                    <BusInfo busNumber={b.bus_number} arrivalTime={b.arrival_time} departureTime={b.departure_time}/>
                  </li>))}
            </ul>
          </div>
        ) : (<p className = {classes.noBus}>No buses are available right now</p>)}
      </div>
    )}
  </>;
}








      
 
