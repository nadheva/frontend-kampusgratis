import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import careerService from "./careerService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
	data: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

export const getCareer = createAsyncThunk("career/get", async (_, thunkAPI) => {
	try {
		const { data } = await careerService.getCareer();

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			extartErrorFirebase(error) || extractErrorMessage(error)
		);
	}
});

export const careerSlice = createSlice({
	name: "career",
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
			.addCase(getCareer.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCareer.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data.career = action.payload;
			})
			.addCase(getCareer.rejected, (state, action) => {
				state.isSuccess = false;
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	},
});

export const { resetState, reset, resetAll } = careerSlice.actions;
export default careerSlice.reducer;
