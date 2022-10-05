import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import artikelReducer from '../features/artikel/artikelSlice';
import administrationReducer from '../features/administration/administrationSlice';
import syllabusReducer from '../features/syllabus/syllabusSlice';
import subjectReducer from '../features/subject/subjectSlice';
import sessionReducer from '../features/session/sessionSlice';
import moduleReducer from '../features/module/moduleSlice';
import detailModuleReducer from '../features/detailmodule/detailModuleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    artikel: artikelReducer,
    administration: administrationReducer,
    syllabus: syllabusReducer,
    subject: subjectReducer,
    session: sessionReducer,
    module: moduleReducer,
    detailModule: detailModuleReducer
  }
});