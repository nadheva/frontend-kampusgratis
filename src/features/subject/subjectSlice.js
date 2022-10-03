import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import subjectService from './subjectService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getSubject = createAsyncThunk(
  'subject/enrolledsubjects',
  async (token, thunkAPI) => {
    try {

      const { data } = await subjectService.getSubject(token);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
  }
});

export const { reset } = subjectSlice.actions;
export default subjectSlice.reducer;