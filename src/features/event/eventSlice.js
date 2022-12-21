import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getEvents = createAsyncThunk("events/all", async ({ currentPage }, thunkAPI) => {
    try {
        const { data } = await eventService.getEvents(currentPage);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const getEvent = createAsyncThunk("events/event", async (id, thunkAPI) => {
    try {
        const { data } = await eventService.getEvent(id);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const joinEvent = createAsyncThunk("events/join", async ({ id, data2 }, thunkAPI) => {
    try {
        const { data } = await eventService.joinEvent(id, data2);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const eventSlice = createSlice({
    name: "event",
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
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.events = action.payload;
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getEvent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.event = action.payload;
            })
            .addCase(getEvent.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(joinEvent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(joinEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "SUCCESS_UPLOAD";
                state.data.event = action.payload;
            })
            .addCase(joinEvent.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { resetState, reset, resetAll } = eventSlice.actions;
export default eventSlice.reducer;
