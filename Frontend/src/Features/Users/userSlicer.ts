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

// Async thunk for logging in the user
export const loginUser = createAsyncThunk<User, { email: string; password: string }>(
  'auth/login',
  async ({ email, password }) => {
    const response = await axios.post('http://localhost:3000/api/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  }
);

export const signupUser = createAsyncThunk<User, User>(
  'auth/signup',
  async (user) => {
    console.log("In reducer", user.get('image'));
    const response = await axios.post('http://localhost:3000/api/signup', user);
    return response.data.user;
  }
);

export const fetchUserProfile = createAsyncThunk<User>('auth/profile', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:3000/api/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.user;
});

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
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user profile';
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to sign up';
      });
  },
});

export default authSlice.reducer;