import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myStudyService from './myStudyService';
import { extartErrorFirebase, extractErrorMessage } from '../../utils';

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getMySubjects = createAsyncThunk(
  'my-study/get-my-subjects',
  async ({ currentPage, search }, thunkAPI) => {
    try {
      const { data } = await myStudyService.getMySubjects(currentPage, search);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getModuleBySession = createAsyncThunk(
  'my-study/get-module-by-session-id',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getModuleBySession(sessionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getVideo = createAsyncThunk(
  'my-study/get-video-by-video-id',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getVideo(sessionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getSingleModule = createAsyncThunk(
  'my-study/get-module-by-module-id',
  async (moduleId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getSingleModule(moduleId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getSubject = createAsyncThunk(
  'my-study/get-subject-by-session-id',
  async (subjectId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getSubject(subjectId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getSessions = createAsyncThunk(
  'my-study/get-sessions-by-subject-id',
  async (subjectId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getSessions(subjectId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const myStudySlice = createSlice({
  name: 'my-study',
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
      .addCase(getMySubjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMySubjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.subjects = action.payload;
      })
      .addCase(getMySubjects.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSubject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.subject = action.payload;
      })
      .addCase(getSubject.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSessions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSessions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.sessions = action.payload;
      })
      .addCase(getSessions.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getModuleBySession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getModuleBySession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.modules = action.payload;
      })
      .addCase(getModuleBySession.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleModule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleModule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.module = action.payload;
      })
      .addCase(getSingleModule.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.video = action.payload;
      })
      .addCase(getVideo.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = myStudySlice.actions;
export default myStudySlice.reducer;