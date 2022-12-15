import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import leaderboardService from "./leaderboardService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getLeaderboardGlobal = createAsyncThunk(
  'leaderboard/get-global',
  async (_, thunkAPI) => {
    try {
      return await leaderboardService.getLeaderboardGlobal();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const leaderboardSlice = createSlice({
  name: "leaderboard",
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
      .addCase(getLeaderboardGlobal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLeaderboardGlobal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.leaderboard_global = action.payload;
      })
      .addCase(getLeaderboardGlobal.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { resetState, reset, resetAll } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
