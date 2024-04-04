import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {fetchFlights} from "../actions/flightsActions"
export  const fetchFlights = createAsyncThunk("/fetchFlights", async () => {
  try {
    // const response = await axios.get('http://localhost:3000/api/flight');
   const response =await  axios.get(`http://localhost:3000/api/booking`)
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
    error:null,
    loading:false,
    showAll: false,
    selectedFlight: {},
    showPaymentCard: false
  },

  extraReducers:(builder)=>{
    builder.addCase(fetchFlights.fulfilled,(state,action)=>{
      state.flights=action.payload

    })
    builder.addCase(fetchFlights.rejected,(state,action)=>{
      state.error=action.error
      state.loading=false
      
    })
    builder.addCase(fetchFlights.pending,(state,action)=>{
      state.loading=true
      
    })
  }
});

// export const { setFlights } = flightsSlice.actions;

// export default flightsSlice.reducer;
// export const { setShowAll } = flightsSlice.actions;
// export const{setSelectedFlight} = flightsSlice.actions;
// export const{setShowPaymentCard} = flightsSlice.actions;

// export const { setFlights, setShowAll, setSelectedFlight, setShowPaymentCard } = flightsSlice.actions;

export default flightsSlice.reducer;