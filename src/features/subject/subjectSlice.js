import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import subjectService from './subjectService';

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

export const getMySubjects = createAsyncThunk(
	'my-study/get-my-subjects',
	async (_, thunkAPI) => {
		try {
			const { data } = await subjectService.getMySubjects();

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
		}
	}
)

export const getSubject = createAsyncThunk(
	'my-study/get-subject-by-id',
	async (subjectId, thunkAPI) => {
		try {
			const { data } = await subjectService.getSubject(subjectId);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
		}
	}
)

export const subjectSlice = createSlice({
	name: 'subject',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
		resetAll: (state) => {
			state.data = {};
			state.isError = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMySubjects.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMySubjects.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.subjects = action.payload;
			})
			.addCase(getMySubjects.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getSubject.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSubject.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.subject = action.payload;
			})
			.addCase(getSubject.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	}
});

export const { reset, resetAll } = subjectSlice.actions;
export default subjectSlice.reducer;