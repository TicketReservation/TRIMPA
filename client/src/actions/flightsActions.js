import axios from 'axios';
import { setFlights } from '../reducers/flightsReducer';

export const fetchFlights = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/flight');
    dispatch(setFlights(response.data));
    console.log("action response",response)
  } catch (error) {
    console.error('Failed to fetch flights', error);
  }
};