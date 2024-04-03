import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { useSelector, useDispatch } from 'react-redux';
import { searchFlights } from '../actions/SearchBarActions'; // Only import searchFlights
import { setDeparture, setDestination } from '../reducers/SearchBarReducer'; // Import setDeparture and setDestination from the reducer, not from actions

const SearchBar = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);
  const departureValue = useSelector((state) => state.searchBar.departure);
  const destinationValue = useSelector((state) => state.searchBar.destination);

  const handleDepartureChange = (e) => {
    dispatch(setDeparture(e.target.value));
  };

  const handleDestinationChange = (e) => {
    dispatch(setDestination(e.target.value));
  };

  const handleSearchClick = () => {
    dispatch(searchFlights(departureValue, destinationValue));
  };

  return (
    <span className='filter'>
      <input
        className='inputs'
        type="text"
        placeholder='From where?'
        value={departureValue}
        onChange={handleDepartureChange}
      />
      <input
        className='inputs'
        type="text"
        placeholder='Where to?'
        value={destinationValue}
        onChange={handleDestinationChange}
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
      <button className="searchBtn" onClick={handleSearchClick}>Search</button>

      {/* Display a message if no flights are available */}
      {flights && flights.length === 0 && <p>No flights available</p>}
    </span>
  );
};

export default SearchBar;



























// import React, { useState } from 'react'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
// import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField'
// // import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
// import searchFlights from '../actions/SearchBarActions'
// import { fetchFlights } from '../actions/flightsActions'
// import { departure, destination } from '../actions/SearchBarActions'








// const SearchBar =() => {
//   const dispatch = useDispatch()

//   const flights = useSelector((state) => state.flights.flights)
//   const departure = useSelector((state) => state.searchBar.departure)
//   const destination = useSelector((state) => state.searchBar.destination)

// console.log("departure",departure)

  // const [flights, setFlights] = useState([])
  // const [departure, setDeparture] = useState('')
  // const [destination, setDestination] = useState('')
  // useEffect(() => {
  //   fetchFlights()
  // }, [])

  // const fetchFlights = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/api/flight")
  //     setFlights(response.data)
  //   } catch (error) {
  //     console.error("Error fetching flights:", error)
  //   }
  // }

  // const searchFlights = async (departure, destination) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`)
  //     setFlights(response.data)
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error("Error searching flights:", error)
  //   }
  // }

//   return (
//     <span className='filter'>
//       <input
//         className='inputs'
//         type="text"
//         placeholder='From where?'
//         value={departure}
//         onChange={(e) => dispatch(departure(e.target.value))}
//       />
//       <input
//         className='inputs'
//         type="text"
//         placeholder='Where to?'
//         value={destination}
//         onChange={(e) => dispatch(destination(e.target.value))}
//       />
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateRangePicker
//           slots={{ field: SingleInputDateRangeField }}
//           name="allowedRange"
//         />
//       </LocalizationProvider>
//       <input
//         className='inputs'
//         placeholder='Quantity?'
//         id='nbrInp'
//         type="number"
//       />
//       <button className="searchBtn" onClick={() => searchFlights(departure, destination)}>Search</button>

//       {flights && flights.length === 0 && <p>No flights available</p>}
//     </span>
//   )
// }



// export default SearchBar