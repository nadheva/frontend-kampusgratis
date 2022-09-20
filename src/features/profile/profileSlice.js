import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import profileService from './profileService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMe = createAsyncThunk(
  'profile/get-me',
  async (_, thunkAPI) => {
    try {
      const auth = getAuth();
      const token = await auth.currentUser.getIdToken();

      const { data } = await profileService.getMe(token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const updateProfile = createAsyncThunk(
  'profile/put-me',
  async (_, thunkAPI) => {
    try {
      return await profileService.updateProfile(_.data, _.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.user = '';
      state.token = '';
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
        state.message = "Perubahan Profil Tersimpan.";
        state.user = action.payload.data;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;