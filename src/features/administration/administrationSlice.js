import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import administrationService from './administrationService';

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMyAdministration = createAsyncThunk(
  'administration/mine',
  async (token, thunkAPI) => {
    try {
      return await administrationService.getMyAdministration(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const sendAdministrationBiodata = createAsyncThunk(
  'administration/biodata',
  async (_, thunkAPI) => {
    try {
      return await administrationService.sendAdministrationBiodata(_);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const sendAdministrationFamilial = createAsyncThunk(
  'administration/familial',
  async (_, thunkAPI) => {
    try {
      return await administrationService.sendAdministrationFamilial(_);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const sendAdministrationFiles = createAsyncThunk(
  'administration/files',
  async (_, thunkAPI) => {
    try {
      return await administrationService.sendAdministrationFiles(_);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const sendAdministrationDegree = createAsyncThunk(
  'administration/degree',
  async (_, thunkAPI) => {
    try {
      return await administrationService.sendAdministrationDegree(_);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const administrationSlice = createSlice({
  name: 'administration',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
    resetState: (state) => {
      state.data = {};
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyAdministration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyAdministration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(getMyAdministration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendAdministrationBiodata.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAdministrationBiodata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Administrasi Biodata telah disimpan."; // action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(sendAdministrationBiodata.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendAdministrationFamilial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAdministrationFamilial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Administrasi Keluarga telah disimpan."; // action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(sendAdministrationFamilial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendAdministrationFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAdministrationFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Administrasi Berkas telah disimpan."; // action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(sendAdministrationFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendAdministrationDegree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendAdministrationDegree.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Administrasi Jenjang telah disimpan."; // action.payload.message;
        state.data = action.payload.data;
      })
      .addCase(sendAdministrationDegree.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetState } = administrationSlice.actions;
export default administrationSlice.reducer;