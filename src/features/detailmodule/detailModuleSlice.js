import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import detailModuleService from './detailModuleService';

const initialState = {
  dModules: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getDetailModules = createAsyncThunk(
  'module/',
  async (moduleId, thunkAPI) => {
    try {

      const { data } = await detailModuleService.getDetailModule(moduleId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const detailModuleSlice = createSlice({
  name: 'detailModule',
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
      .addCase(getDetailModules.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailModules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dModules = action.payload;
      })
      .addCase(getDetailModules.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.dModules = null;
      })
  }
});

export const { reset } = detailModuleSlice.actions;
export default detailModuleSlice.reducer;