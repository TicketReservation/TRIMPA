import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBookings } from '../actions/bookingActions';


export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    booking: [],
    error:null,
    loading:false,

  },



  extraReducers:(builder)=>{
    builder.addCase(fetchBookings.fulfilled,(state,action)=>{
      state.booking=action.payload

    })
    builder.addCase(fetchBookings.rejected,(state,action)=>{
      state.error=action.error
      state.loading=false
      
    })
    builder.addCase(fetchBookings.pending,(state,action)=>{
      state.loading=true
      
    })
  }
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;