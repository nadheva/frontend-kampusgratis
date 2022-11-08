import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import achievementService from "./achievementService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

export const getAchievements = createAsyncThunk("achievement/me", async (_, thunkAPI) => {
	try {
		const { data } = await achievementService.getAchievements();

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			extartErrorFirebase(error) || extractErrorMessage(error)
		);
	}
});

export const achievementSlice = createSlice({
	name: "achievement",
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
			.addCase(getAchievements.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAchievements.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.achievements = action.payload;
			})
			.addCase(getAchievements.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	},
});

export const { resetState, reset } = achievementSlice.actions;
export default achievementSlice.reducer;
