import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import artikelReducer from '../features/artikel/artikelSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    artikel: artikelReducer,

  }
});