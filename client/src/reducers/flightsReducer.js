import { createSlice  } from '@reduxjs/toolkit';
import {fetchFlights} from '../actions/flightsActions';

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    loading: false,
    error: null,
    showAll: false,
    selectedFlight: {},
    showPaymentCard: false
  },
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    setShowAll: (state, action) => {
      state.showAll = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setShowPaymentCard: (state, action) => {
      state.showPaymentCard = action.payload;
    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
    builder.addCase(fetchFlights.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;

    });
    builder.addCase(fetchFlights.pending, (state, action) => {
      
      state.loading = true;

    });
  }
});

export const { setFlights } = flightsSlice.actions;
export const { setShowAll } = flightsSlice.actions;
export const { setSelectedFlight } = flightsSlice.actions;

export const { setShowPaymentCard } = flightsSlice.actions;
export default flightsSlice.reducer;