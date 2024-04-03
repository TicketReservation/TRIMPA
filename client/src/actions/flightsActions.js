import axios from 'axios';
// import { setFlights } from '../reducers/flightsReducer';
import { setShowAll } from '../reducers/flightsReducer';
import {createAsyncThunk  } from '@reduxjs/toolkit';

export const fetchFlights = createAsyncThunk('flights/getFlights',async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/flight');
    return response.data
  } catch (error) {
    console.error('Failed to fetch flights', error);
  }
})

export const showAllAsync = () => async (dispatch) => {
  dispatch(setShowAll(true));
};

