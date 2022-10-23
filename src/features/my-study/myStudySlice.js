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

export const getDocument = createAsyncThunk(
  'my-study/get-document-by-document-id',
  async (documentId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getDocument(documentId);

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

export const getQuizBySession = createAsyncThunk(
  'my-study/get-quiz-by-session-id',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getQuizBySession(sessionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)
export const startQuiz = createAsyncThunk(
  'my-study/start-quiz-by-quiz-id',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.startQuiz(sessionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const getSingleDiscussion = createAsyncThunk(
  'my-study/get-discussion-by-discussion-id',
  async (discussionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getSingleDiscussion(discussionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const finishModule = createAsyncThunk(
  'my-study/finish-module-by-module-id',
  async (_, thunkAPI) => {
    try {
      const { data } = await myStudyService.finishModule(_.moduleId, _.textDoneModule);

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

export const getDiscussions = createAsyncThunk(
  'my-study/forum-get-discussions',
  async (sessionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.getDiscussions(sessionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const sendComment = createAsyncThunk(
  'my-study/forum-insert-comment',
  async (_, thunkAPI) => {
    try {
      const { data } = await myStudyService.sendComment(_.discussionId, _.comment);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const sendReply = createAsyncThunk(
  'my-study/forum-insert-reply',
  async (_, thunkAPI) => {
    try {
      const { data } = await myStudyService.sendReply(_.commentId, _.comment);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const deleteComment = createAsyncThunk(
  'my-study/forum-delete-comment',
  async (commentId, thunkAPI) => {
    try {
      const { data } = await myStudyService.deleteComment(commentId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const deleteReply = createAsyncThunk(
  'my-study/forum-delete-reply',
  async (replyId, thunkAPI) => {
    try {
      const { data } = await myStudyService.deleteReply(replyId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const likeDiscussion = createAsyncThunk(
  'my-study/forum-like-discussion',
  async (discussionId, thunkAPI) => {
    try {
      const { data } = await myStudyService.likeDiscussion(discussionId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const likeComment = createAsyncThunk(
  'my-study/forum-like-comment',
  async (commentId, thunkAPI) => {
    try {
      const { data } = await myStudyService.likeComment(commentId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extartErrorFirebase(error) || extractErrorMessage(error));
    }
  }
)

export const likeReply = createAsyncThunk(
  'my-study/forum-like-reply',
  async (replyId, thunkAPI) => {
    try {
      const { data } = await myStudyService.likeReply(replyId);

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
      .addCase(getDocument.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.document = action.payload;
      })
      .addCase(getDocument.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDiscussions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiscussions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.discussions = action.payload;
      })
      .addCase(getDiscussions.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleDiscussion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleDiscussion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.discussion = action.payload;
      })
      .addCase(getSingleDiscussion.rejected, (state, action) => {
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
        state.data.comments = action.payload;
        state.message = "SENT_COMMENT";
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendReply.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(sendReply.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.comments = action.payload;
        state.message = "SENT_REPLY";
      })
      .addCase(sendReply.rejected, (state, action) => {
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
        state.data.comments = action.payload;
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
        state.data.comments = action.payload;
        state.message = "DELETE_REPLY";
      })
      .addCase(deleteReply.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeDiscussion.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(likeDiscussion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.discussion = { ...state.data.discussion, ...action.payload };
        state.message = "LIKE_DISCUSSION";
      })
      .addCase(likeDiscussion.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeComment.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(likeComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.comment = action.payload;
        state.message = "LIKE_COMMENT";
      })
      .addCase(likeComment.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likeReply.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(likeReply.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.comment = action.payload;
        state.message = "LIKE_REPLY";
      })
      .addCase(likeReply.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQuizBySession.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(getQuizBySession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.quiz = action.payload;
      })
      .addCase(getQuizBySession.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(startQuiz.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(startQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.quiz_detail = action.payload;
      })
      .addCase(startQuiz.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(finishModule.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(finishModule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.module_submit = action.payload;
      })
      .addCase(finishModule.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset, resetAll } = myStudySlice.actions;
export default myStudySlice.reducer;