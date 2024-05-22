// Features/Users/UserSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  _id1: number;
  firstName: string;
  lastName: string;
  contact: string;
  image: string;
  address: string;
  password: string;
  email: string;
  gender: string;
  dob: string;
}

interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

export const loginUser = createAsyncThunk<User, { email: string, password: string }>('api/login', async ({ email, password }) => {
    console.log("dispatcher mai hoon", email,password)
    const response = await axios.post('http://localhost:3000/api/login', { email, password });
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message || 'Failed to login';
      });
  },
});

export default authSlice.reducer;
