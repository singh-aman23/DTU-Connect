'use client';
import { useState } from "react";
import classes from './searchForm.module.css';


const SearchForm = ({ onSearch, isLoading }) => {
    const [startingLocation, setStartingLocation] = useState("");
    const [endingLocation, setEndingLocation] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      onSearch(startingLocation, endingLocation);
    };
  
    return (
      <>
        <form className={classes.form} onSubmit={handleSubmit}>
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
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>
      </>
    );
  };

  export default SearchForm;
