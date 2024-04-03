
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {fetchFlights} from "../actions/flightsActions"
export  const fetchFlights = createAsyncThunk("/fetchFlights", async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/flight');
    console.log("action response",response)
return response.data
    // return response.data
  } catch (error) {
    console.error('Failed to fetch flights', error);
    // return error 
  }
})

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