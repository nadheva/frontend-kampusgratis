import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils";
import syllabusService from "./syllabusService";

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getMajors = createAsyncThunk(
	"syllabus/get-majors",
	async ({ currentPage, search }, thunkAPI) => {
		try {
			return await syllabusService.getMajors(currentPage, search);
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const getSubjectsByMajor = createAsyncThunk(
	"syllabus/get-subject-by-major",
	async (majorId, thunkAPI) => {
		try {
			return await syllabusService.getSubjectByMajor(majorId);
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const takeStudyPlan = createAsyncThunk(
	"syllabus/take-study-plan",
	async (majorId, thunkAPI) => {
		try {
			return await syllabusService.takeStudyPlan(majorId);
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const removeStudyPlan = createAsyncThunk(
	"syllabus/remove-study-plan",
	async (majorId, thunkAPI) => {
		try {
			return await syllabusService.removeStudyPlan(majorId);
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const getMyStudyPlan = createAsyncThunk(
	"syllabus/get-my-study-plan",
	async (_, thunkAPI) => {
		try {
			return await syllabusService.getMyStudyPlan();
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const doSendDraft = createAsyncThunk(
	"syllabus/send-draft",
	async (_, thunkAPI) => {
		try {
			return await syllabusService.doSendDraft();
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const takeCurrentMajor = createAsyncThunk(
	"syllabus/take-major",
	async (majorId, thunkAPI) => {
		try {
			return await syllabusService.takeCurrentMajor(majorId);
		} catch (error) {
			return thunkAPI.rejectWithValue(extractErrorMessage(error));
		}
	}
);

export const syllabusSlice = createSlice({
	name: "syllabus",
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.message = "";
		},
		resetAll: (state) => {
			state.data = {};
			state.isError = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMajors.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMajors.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.majors = action.payload.data;
			})
			.addCase(getMajors.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getSubjectsByMajor.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSubjectsByMajor.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.subjects = action.payload.data;
			})
			.addCase(getSubjectsByMajor.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getMyStudyPlan.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMyStudyPlan.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.study_plan = action.payload.data;
			})
			.addCase(getMyStudyPlan.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(takeStudyPlan.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(takeStudyPlan.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = action.payload.message;
				state.data.study_plan = action.payload.data;
			})
			.addCase(takeStudyPlan.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(removeStudyPlan.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(removeStudyPlan.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = action.payload.message;
				state.data.study_plan = action.payload.data;
			})
			.addCase(removeStudyPlan.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(doSendDraft.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(doSendDraft.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = action.payload.message;
				state.data.study_plan = action.payload.data;
			})
			.addCase(doSendDraft.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(takeCurrentMajor.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(takeCurrentMajor.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = action.payload.message;
			})
			.addCase(takeCurrentMajor.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset, resetAll } = syllabusSlice.actions;
export default syllabusSlice.reducer;
