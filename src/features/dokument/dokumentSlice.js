import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import DokumentService from './dokumentService';

const initialState = {
  dokument: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getDokuments = createAsyncThunk(
  'module/document/',
  async (dokumenId, thunkAPI) => {
    try {

      const { data } = await DokumentService.getDokument(dokumenId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const dokumentSlice = createSlice({
  name: 'dokument',
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
      .addCase(getDokuments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDokuments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dokument = action.payload;
      })
      .addCase(getDokuments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.dokument = null;
      })
  }
});

export const { reset } = dokumentSlice.actions;
export default dokumentSlice.reducer;