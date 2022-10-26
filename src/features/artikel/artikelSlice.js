import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import artikelService from './artikelService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const initialState = {
  artikels: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const artikelAll = createAsyncThunk(
  'article/index',
  async (_, thunkAPI) => {
    try {

      const { data } = await artikelService.artikelAll();
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const artikelSlice = createSlice({
  name: 'artikel',
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
      .addCase(artikelAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(artikelAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.artikels = action.payload;
      })
      .addCase(artikelAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.artikels = null;
      })
  }
});

export const { reset } = artikelSlice.actions;
export default artikelSlice.reducer;