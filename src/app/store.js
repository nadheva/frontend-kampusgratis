import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import artikelReducer from '../features/artikel/artikelSlice';
import administrationReducer from '../features/administration/administrationSlice';
import syllabusReducer from '../features/syllabus/syllabusSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    artikel: artikelReducer,
    administration: administrationReducer,
    syllabus: syllabusReducer
  }
});