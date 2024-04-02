import { createSlice } from '@reduxjs/toolkit';

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: { flights: {} },
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
  },
});
console.log(flightsSlice)
export const { setFlights } = flightsSlice.actions;

export default flightsSlice.reducer;