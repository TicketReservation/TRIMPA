import axios from 'axios';
import { setFlights } from '../reducers/SearchBarReducer';



  export const fetchFlights = () => async (departure,destination,dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
      dispatch(setFlights(response.data));
      console.log("action response",response)
    } catch (error) {
      console.error('Failed to fetch flights', error);
    }
  };