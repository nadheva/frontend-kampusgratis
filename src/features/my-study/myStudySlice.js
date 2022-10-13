import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myStudyService from './myStudyService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMySubjects = createAsyncThunk(
  'my-study/get-my-subjects',
  async ({ currentPage, search }, thunkAPI) => {
    try {
      const { data } = await myStudyService.getMySubjects(currentPage, search);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const myStudySlice = createSlice({
  name: 'my-study',
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
        state.data = action.payload;
      })
      .addCase(getMySubjects.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
  }
});

export const { reset, resetAll } = myStudySlice.actions;
export default myStudySlice.reducer;