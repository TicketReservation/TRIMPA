import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';

export const fetchBookings = createAsyncThunk('booking/getBooking',async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/booking');
    return response.data
  } catch (error) {
    console.error('Failed to fetch flights', error);
  }
})



