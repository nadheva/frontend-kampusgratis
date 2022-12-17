import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import discussionGlobalService from "./discussionGlobalService";
import { extartErrorFirebase, extractErrorMessage } from "../../utils";

const initialState = {
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getAllDiscussion = createAsyncThunk(
  'discussion-global/get-all-discussion',
  async (_, thunkAPI) => {
    try {
      return await discussionGlobalService.getAllDiscussion();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const getDiscussionDetail = createAsyncThunk(
  'discussion-global/get-discussion-single',
  async (discussionId, thunkAPI) => {
    try {
      return await discussionGlobalService.getDiscussionDetail(discussionId);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const likeDiscussion = createAsyncThunk(
  'discussion-global/like-unlike-discussion',
  async (discussionId, thunkAPI) => {
    try {
      return await discussionGlobalService.likeDiscussion(discussionId);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const sendComment = createAsyncThunk(
  'discussion-global/forum-insert-comment',
  async (_, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.sendComment(_.discussionId, _.comment);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const sendReply = createAsyncThunk(
  'discussion-global/forum-insert-reply',
  async (_, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.sendReply(_.commentId, _.comment);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const deleteComment = createAsyncThunk(
  'discussion-global/forum-delete-comment',
  async (commentId, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.deleteComment(commentId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const deleteReply = createAsyncThunk(
  'discussion-global/forum-delete-reply',
  async (replyId, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.deleteReply(replyId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const likeComment = createAsyncThunk(
  'discussion-global/forum-like-comment',
  async (commentId, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.likeComment(commentId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const likeReply = createAsyncThunk(
  'discussion-global/forum-like-reply',
  async (replyId, thunkAPI) => {
    try {
      const { data } = await discussionGlobalService.likeReply(replyId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const discussionGlobalSlice = createSlice({
  name: "discussion-global",
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
      .addCase(getAllDiscussion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDiscussion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.discussions = action.payload;
      })
      .addCase(getAllDiscussion.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDiscussionDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiscussionDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "GET_DISCUSSION";
        state.data.discussion = action.payload;
      })
      .addCase(getDiscussionDetail.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeDiscussion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likeDiscussion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "LIKE_DISCUSSION";
        state.data.discussion = action.payload.data;
      })
      .addCase(likeDiscussion.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendComment.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.discussion_insert = action.payload;
        state.message = "SENT_COMMENT";
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "DELETE_COMMENT";
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReply.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(deleteReply.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "DELETE_REPLY";
      })
      .addCase(deleteReply.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, resetAll } = discussionGlobalSlice.actions;
export default discussionGlobalSlice.reducer;
