import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import axios from 'axios';

function SearchBar() {
  const [flights, setFlights] = useState([]);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/flight");
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  const searchFlights = async (departure, destination) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
      setFlights(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching flights:", error);
    }
  };

  return (
    <span className='filter'>
      <input
        className='inputs'
        type="text"
        placeholder='From where?'
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
      />
      <input
        className='inputs'
        type="text"
        placeholder='Where to?'
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
        />
      </LocalizationProvider>
      <input
        className='inputs'
        placeholder='Quantity?'
        id='nbrInp'
        type="number"
      />
      <button className="searchBtn" onClick={() => searchFlights(departure, destination)}>Search</button>

      {flights && flights.length === 0 && <p>No flights available</p>}
    </span>
  );
}

export default SearchBar;
