import { createSlice } from '@reduxjs/toolkit';

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: {},
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
});

export const { setFlights } = flightsSlice.actions;

export default flightsSlice.reducer;
export const { setShowAll } = flightsSlice.actions;
export const{setSelectedFlight} = flightsSlice.actions;
export const{setShowPaymentCard} = flightsSlice.actions;