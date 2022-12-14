import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import assignmentService from './assignmentService';

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getAssignments = createAsyncThunk(
  'assignment/submissiondata',
  async (_, thunkAPI) => {
    try {
      const { data } = await assignmentService.getAssignments();
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getAssignment = createAsyncThunk(
  'assignment/session/',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await assignmentService.getAssignment(sessionId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const submitAssignment = createAsyncThunk(
  'assignment/submit/',
  async ({ sessionId, assignment }, thunkAPI) => {
    try {

      const { data } = await assignmentService.sendAssignment(sessionId, assignment);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const updateAssignment = createAsyncThunk(
  'assignment/edit/',
  async ({ sessionId, assignment }, thunkAPI) => {
    try {

      const { data } = await assignmentService.updateAssignment(sessionId, assignment);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const deleteAssignment = createAsyncThunk(
  'assignment/delete/',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await assignmentService.deleteAssignment(sessionId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const assignmentSlice = createSlice({
  name: 'assignment',
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
      .addCase(getAssignments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssignments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.assignments = action.payload;
      })
      .addCase(getAssignments.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAssignment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssignment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.assignment = action.payload;
      })
      .addCase(getAssignment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(submitAssignment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitAssignment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.assignment = action.payload;
      })
      .addCase(submitAssignment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAssignment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAssignment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "SUCCESS_UPLOAD";
        state.data.assignment = action.payload;
      })
      .addCase(updateAssignment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAssignment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAssignment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "DELETE_ASSIGNMENT";
        state.data.assignment = action.payload;
      })
      .addCase(deleteAssignment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = assignmentSlice.actions;
export default assignmentSlice.reducer;