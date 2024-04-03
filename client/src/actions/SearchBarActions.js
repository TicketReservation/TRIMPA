// import axios from 'axios';
// import { setSearchResults, setDeparture, setDestination } from '../reducers/SearchBarReducer';

// export const searchFlights = (departure, destination) => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
//     dispatch(setSearchResults(response.data));
//     console.log("action response", response);
//   } catch (error) {
//     console.error('Failed to fetch flights', error);
//   }
// };

// export default searchFlights;

























// import axios from 'axios';
// import { setFlights } from '../reducers/SearchBarReducer';
// import { setSearchResults } from '../reducers/SearchBarReducer';


//   export const searchFlights = () => async (departure,destination,dispatch) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
//       dispatch(setSearchResults(response.data));
//       console.log("action response",response)
//     } catch (error) {
//       console.error('Failed to fetch flights', error);
//     }
//   };

//   // actions/SearchBarActions.js

// export const setDeparture = (departure) => ({
//   type: 'SET_DEPARTURE',
//   payload: departure,
// });

// export const setDestination = (destination) => ({
//   type: 'SET_DESTINATION',
//   payload: destination,
// });

// export default searchFlights;