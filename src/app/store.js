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
import notificationReducer from "../features/notification/notificationSlice";
import calenderReducer from "../features/calender/calenderSlice";
import guideReducer from "../features/guide/guideSlice";
import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
import discussionGlobalReducer from "../features/discussion-global/discussionGlobalSlice";
import eventReducer from "../features/event/eventSlice";
import jobsReducer from "../features/jobs/jobsSlice";

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
		report: reportReducer,
		notification: notificationReducer,
		calender: calenderReducer,
		guide: guideReducer,
		leaderboard: leaderboardReducer,
		discussionGlobal: discussionGlobalReducer,
		event: eventReducer,
		jobs: jobsReducer
	}
});
