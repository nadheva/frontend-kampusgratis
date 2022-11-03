import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import administrationReducer from "../features/administration/administrationSlice";
import syllabusReducer from "../features/syllabus/syllabusSlice";
import myStudyReducer from "../features/my-study/myStudySlice";
import artikelReducer from "../features/artikel/artikelSlice";
import achievementReducer from "../features/achievement/achievementSlice";
import assignmentReducer from '../features/assignment/assignmentSlice';
import certificateReducer from '../features/sertifikat/certificateSlice';
import reportReducer from '../features/report/reportSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		profile: profileReducer,
		administration: administrationReducer,
		syllabus: syllabusReducer,
		myStudy: myStudyReducer,
		artikel: artikelReducer,
		achievement: achievementReducer,
		assignment: assignmentReducer,
		certificate: certificateReducer,
		report: reportReducer
	},
});
