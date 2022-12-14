import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import guideService from "./guideService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getGuideVideos = createAsyncThunk("guide/getbytype?type=video", async (_, thunkAPI) => {
    try {
        const { data } = await guideService.getGuideVideos();

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const getGuideBooks = createAsyncThunk("guide/getbytype?type=book", async (_, thunkAPI) => {
    try {
        const { data } = await guideService.getGuideBooks();

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const getGuide = createAsyncThunk("guide/getbyid/id", async (id, thunkAPI) => {
    try {
        const { data } = await guideService.getGuide(id);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});


export const guideSlice = createSlice({
    name: "guide",
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
            .addCase(getGuideVideos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGuideVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.video = action.payload;
            })
            .addCase(getGuideVideos.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getGuideBooks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGuideBooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.book = action.payload;
            })
            .addCase(getGuideBooks.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getGuide.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGuide.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.guide = action.payload;
            })
            .addCase(getGuide.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { resetState, reset } = guideSlice.actions;
export default guideSlice.reducer;
