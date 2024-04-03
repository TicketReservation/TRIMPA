import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { setFlights } from '../reducers/flightsReducer';
// import { setShowAll } from '../reducers/flightsReducer';



 export const fetchFlights = createAsyncThunk("/fetchFlights", async () => {
  try {
    // const response = await axios.get('http://localhost:3000/api/flight');
   const response =await  axios.get(`http://localhost:3000/api/booking`)
    console.log("action response",response)
return response.data
    // return response.data
  } catch (error) {
    console.error('Failed to fetch flights', error);
    // return error 
  }
})

// export const showAllAsync = () => async (dispatch) => {
//   dispatch(setShowAll(true));
// };








// const searchFlights = async (departure, destination) => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
  //     setFlights(res.data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }