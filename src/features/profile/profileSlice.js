import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getMe = createAsyncThunk("profile/get-me", async (_, thunkAPI) => {
	try {
		const { data } = await profileService.getMe();

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			extartErrorFirebase(error) || extractErrorMessage(error)
		);
	}
});

export const updateProfile = createAsyncThunk(
	"profile/put-me",
	async (data, thunkAPI) => {
		try {
			return await profileService.updateProfile(data);
		} catch (error) {
			return thunkAPI.rejectWithValue(
				extartErrorFirebase(error) || extractErrorMessage(error)
			);
		}
	}
);

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		resetState: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
			state.user = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMe.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMe.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(getMe.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = "Perubahan Profil telah disimpan.";
				state.user = action.payload.data;
			})
			.addCase(updateProfile.rejected, (state, action) => {
				console.log(action.payload);
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload.message;
			});
	},
});

export const { resetState, reset } = profileSlice.actions;
export default profileSlice.reducer;
