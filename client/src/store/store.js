// store.js

import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from '../reducers/flightsReducer';
import bookingsReducer from '../reducers/bookingReducer';
import signInReducers from '../reducers/signInReducers';
import signUpReducer from '../reducers/signUpSlice'; 

export default configureStore({
  reducer: {
    flights: flightsReducer,
    bookings: bookingsReducer,
    // signIn: signInReducers,
    // signUp: signUpReducer,
  },
});
