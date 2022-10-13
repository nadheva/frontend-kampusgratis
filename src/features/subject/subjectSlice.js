import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";
import subjectService from "./subjectService";

const initialState = {
	subjects: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getSubjects = createAsyncThunk(
	"subject/enrolledsubjects",
	async (_, thunkAPI) => {
		try {
			const { data } = await subjectService.getSubject();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				extartErrorFirebase(error) || extractErrorMessage(error)
			);
		}
	}
);

export const subjectSlice = createSlice({
	name: "subject",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSubjects.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSubjects.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.subjects = action.payload;
			})
			.addCase(getSubjects.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.subjects = null;
			});
	},
});

export const { reset } = subjectSlice.actions;
export default subjectSlice.reducer;
