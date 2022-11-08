import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import artikelService from './artikelService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const initialState = {
  data: {},
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

export const artikel = createAsyncThunk(
  'article/id',
  async (id, thunkAPI) => {
    try {

      const { data } = await artikelService.artikel(id);
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
      .addCase(artikelAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(artikelAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.artikels = action.payload;
      })
      .addCase(artikelAll.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(artikel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(artikel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.artikel = action.payload;
      })
      .addCase(artikel.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset } = artikelSlice.actions;
export default artikelSlice.reducer;