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

export const getApplication = createAsyncThunk("guide/application", async ({ currentPage, search }, thunkAPI) => {
    try {
        const { data } = await guideService.getApplication(currentPage, search);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const getGlossaries = createAsyncThunk("guide/glossary", async ({ currentPage, search }, thunkAPI) => {
    try {
        const { data } = await guideService.getGlossaries(currentPage, search);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            extartErrorFirebase(error) || extractErrorMessage(error)
        );
    }
});

export const getGlossary = createAsyncThunk("guide/glossary/id", async (id, thunkAPI) => {
    try {
        const { data } = await guideService.getGlossary(id);

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
            .addCase(getApplication.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getApplication.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.application = action.payload;
            })
            .addCase(getApplication.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getGlossaries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGlossaries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.glossaries = action.payload;
            })
            .addCase(getGlossaries.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getGlossary.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGlossary.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.glossary = action.payload;
            })
            .addCase(getGlossary.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { resetState, reset, resetAll } = guideSlice.actions;
export default guideSlice.reducer;
