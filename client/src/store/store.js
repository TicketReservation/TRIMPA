import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from '../reducers/flightsReducer';
import bookingsReducer from '../reducers/bookingReducer';




export default configureStore({
  reducer: {
    flights: flightsReducer,
    bookings:bookingsReducer,
  },
});