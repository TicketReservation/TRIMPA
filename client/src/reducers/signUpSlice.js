
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   signUpData: {
//     Name: "",
//     email: "",
//     password: "",
//     picture: null
//   },
//   loading: false,
//   error: null,
//   signUpSuccess: false
// };

// export const signUpUser = createAsyncThunk(
//   'signUp/signUpUser',
//   async (signUpData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/user/register", signUpData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const signUpSlice = createSlice({
//   name: 'signUp',
//   initialState,
//   reducers: {
//     updateSignUpData(state, action) {
//       state.signUpData = action.payload;
//     },
//     clearSignUpData(state) {
//       state.signUpData = initialState.signUpData;
//     },
//     clearSignUpStatus(state) {
//       state.signUpSuccess = false;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUpUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUpUser.fulfilled, (state) => {
//         state.loading = false;
//         state.signUpSuccess = true;
//       })
//       .addCase(signUpUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const { updateSignUpData, clearSignUpData, clearSignUpStatus } = signUpSlice.actions;

// export default signUpSlice.reducer;
