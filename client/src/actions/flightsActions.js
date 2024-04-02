import axios from 'axios';
<<<<<<< HEAD
import { Dispatch } from 'redux';
import { setFlights } from '../reducers/flightsReducer';
import { setShowAll } from '../reducers/flightsReducer';
import {createAsyncThunk  } from '@reduxjs/toolkit';
=======
import { setFlights } from '../reducers/flightsReducer';
import { setShowAll } from '../reducers/flightsReducer';
>>>>>>> 8c67ef4b25af1432ebce95c525f93889800ecea7

export const fetchFlights = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/flight');
    dispatch(setFlights(response.data));
    console.log("action response",response)
  } catch (error) {
    console.error('Failed to fetch flights', error);
  }
};

export const showAllAsync = () => async (dispatch) => {
  dispatch(setShowAll(true));
};








// const searchFlights = async (departure, destination) => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
  //     setFlights(res.data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }