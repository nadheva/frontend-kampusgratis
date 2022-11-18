import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationService from "./notificationService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

export const getNotifications = createAsyncThunk("notification/get", async (_, thunkAPI) => {
	try {
		const { data } = await notificationService.getNotifications();

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			extartErrorFirebase(error) || extractErrorMessage(error)
		);
	}
});

export const notificationSlice = createSlice({
	name: "notification",
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
			.addCase(getNotifications.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNotifications.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.notifications = action.payload;
			})
			.addCase(getNotifications.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	},
});

export const { resetState, reset } = notificationSlice.actions;
export default notificationSlice.reducer;
