import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobsService from "./jobsService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getJobs = createAsyncThunk("jobs/all", async ({ dataJob, currentPage }, thunkAPI) => {
    try {
        const { data } = await jobsService.getJobs(dataJob, currentPage)

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});


export const jobsSlice = createSlice({
    name: "jobs",
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
            .addCase(getJobs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.jobs = action.payload;
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { resetState, reset, resetAll } = jobsSlice.actions;
export default jobsSlice.reducer;
