import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import syllabusService from './syllabusService';

const initialState = {
  date: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMajors = createAsyncThunk(
  'syllabus/get-majors',
  async ({ currentPage, search }, thunkAPI) => {
    try {
      return await syllabusService.getMajors(currentPage, search);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const getSubjectsByMajor = createAsyncThunk(
  'syllabus/get-subject-by-major',
  async (majorId, thunkAPI) => {
    try {
      return await syllabusService.getSubjectByMajor(majorId);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const syllabusSlice = createSlice({
  name: 'syllabus',
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
      .addCase(getSubjectsByMajor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubjectsByMajor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(getSubjectsByMajor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = syllabusSlice.actions;
export default syllabusSlice.reducer;