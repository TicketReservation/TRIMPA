// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   signInData: {
//     email: '',
//     password: ''
//   },
//   loading: false,
//   error: null
// };

// export const signInUser = createAsyncThunk(
//   'auth/signInUser',
//   async (signInData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/user/login', signInData);
//       const token = response.data.token;
//       localStorage.setItem('jwtToken', token);
//       return token;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const signInSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     updateSignInData(state, action) {
//       state.signInData = action.payload;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signInUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signInUser.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(signInUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const { updateSignInData } = signInSlice.actions;

// export default signInSlice.reducer;
