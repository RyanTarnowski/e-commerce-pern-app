import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, logout, status, info } from '../../api/user';

export const registerUser = createAsyncThunk(
    'user/register',
    async (credentials, { rejectWithValue }) => {
    try {
        const response = await register(credentials);

        return {
            isAuthenticated: false,
            error: null,
            message: 'Registration successful'
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
    try {
        const response = await login(credentials);

        return {
            isAuthenticated: true,
            user: response.data,
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (user, { rejectWithValue }) => {
    try {
        const response = await logout();

        return {
            isAuthenticated: false,
            user: null
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);

export const userStatus = createAsyncThunk(
    'user/userStatus',
    async (user, { rejectWithValue }) => {
    try {
        const response = await status(user);

        return {
            isAuthenticated: true,
            user: response.data,
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);

export const userInfo = createAsyncThunk(
    'user/userInfo',
    async (user, { rejectWithValue }) => {
    try {
        const response = await info(user);

        return {
            isAuthenticated: true,
            user: response.data[0],
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);