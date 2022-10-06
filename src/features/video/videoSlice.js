import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';
import videoService from './videoService';

const initialState = {
  videos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getVideos = createAsyncThunk(
  'module/video/',
  async (videoId, thunkAPI) => {
    try {

      const { data } = await videoService.getVideo(videoId);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)


export const videoSlice = createSlice({
  name: 'video',
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
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.videos = null;
      })
  }
});

export const { reset } = videoSlice.actions;
export default videoSlice.reducer;