import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from '../reducers/flightsReducer';

export default configureStore({
  reducer: {
    flights: flightsReducer,
  },
});