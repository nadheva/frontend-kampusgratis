import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import moduleService from './assignmentService';

const initialState = {
  modules: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getModules = createAsyncThunk(
  'module/session/',
  async (sessionId, thunkAPI) => {
    try {

      const { data } = await moduleService.getModule(sessionId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const moduleSlice = createSlice({
  name: 'module',
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
      .addCase(getModules.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getModules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.modules = action.payload;
      })
      .addCase(getModules.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.modules = null;
      })
  }
});

export const { reset } = moduleSlice.actions;
export default moduleSlice.reducer;