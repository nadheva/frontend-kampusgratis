import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extractErrorMessage } from '../../utils';
import silabusService from './silabusService';

const initialState = {
  date: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMajors = createAsyncThunk(
  'silabus/get-majors',
  async (currentPage, thunkAPI) => {
    try {
      return await silabusService.getMajors(currentPage);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const administrationSlice = createSlice({
  name: 'administration',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
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
      .addCase(getMajors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMajors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(getMajors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = administrationSlice.actions;
export default administrationSlice.reducer;