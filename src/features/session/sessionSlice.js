import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import sessionService from './sessionService';

const initialState = {
  sessions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getSessions = createAsyncThunk(
  'session/getfromsub/',
  async (sessionId, thunkAPI) => {
    try {

      const { data } = await sessionService.getSession(sessionId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const sessionSlice = createSlice({
  name: 'session',
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
      .addCase(getSessions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSessions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sessions = action.payload;
      })
      .addCase(getSessions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.sessions = null;
      })
  }
});

export const { reset } = sessionSlice.actions;
export default sessionSlice.reducer;