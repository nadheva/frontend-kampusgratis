import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
// import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
    // tickets: ticketReducer,
    // notes: noteReducer,
  }
});