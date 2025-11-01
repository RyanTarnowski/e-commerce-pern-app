import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, userStatus, userInfo } from './User.actions';

const initialState = {
  isAuthenticated: false,
  error: null,
  message: null,
  user: {
    id: null,
    username: '',
    created_at: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.error = false;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { isAuthenticated, user } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.error = false;
        state.user = user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addCase(logoutUser.rejected, () => initialState)
      .addCase(userStatus.fulfilled, (state, action) => {
        const { isAuthenticated, user } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.user = user;
      })
      .addCase(userStatus.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(userInfo.fulfilled, (state, action) => {
        const { isAuthenticated, user } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.user = user;
      })
      .addCase(userInfo.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      })

  }
});

export default userSlice.reducer;