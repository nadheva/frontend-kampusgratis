import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import administrationReducer from "../features/administration/administrationSlice";
import syllabusReducer from "../features/syllabus/syllabusSlice";
import myStudyReducer from "../features/my-study/myStudySlice";
import artikelReducer from "../features/artikel/artikelSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		profile: profileReducer,
		administration: administrationReducer,
		syllabus: syllabusReducer,
		myStudy: myStudyReducer,
		artikel: artikelReducer,
	},
});
