import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import certificateService from './certificateService';

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getCertificates = createAsyncThunk(
  'certificate',
  async ({ currentPage, search }, thunkAPI) => {
    try {
      const { data } = await certificateService.getCertificates(currentPage, search);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getCertificate = createAsyncThunk(
  'certificate/id',
  async (id, thunkAPI) => {
    try {
      const { data } = await certificateService.getCertificate(id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const certificateSlice = createSlice({
  name: 'Certificates',
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
      .addCase(getCertificates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCertificates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.certificates = action.payload;
      })
      .addCase(getCertificates.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCertificate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCertificate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.certificate = action.payload;
      })
      .addCase(getCertificate.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = certificateSlice.actions;
export default certificateSlice.reducer;