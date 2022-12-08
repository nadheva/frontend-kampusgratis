import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import calenderService from "./calenderService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

export const getCalender = createAsyncThunk("calendar/all", async (_, thunkAPI) => {
	try {
		const { data } = await calenderService.getCalender();

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			extartErrorFirebase(error) || extractErrorMessage(error)
		);
	}
});

export const calenderSlice = createSlice({
	name: "calender",
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
			.addCase(getCalender.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCalender.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.calender = action.payload;
			})
			.addCase(getCalender.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	},
});

export const { resetState, reset } = calenderSlice.actions;
export default calenderSlice.reducer;
