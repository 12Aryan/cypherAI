import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../main-store/store";
import run from "../config/gemini";
import { formatResponse } from "../utils/GlobalUtils";
import { ChatWithAIType } from "../types/ChatWithAITypes";
import { hideToast, showToast } from "./SharedSlice";

const initialState: ChatWithAIType = {
  inputPrompt: "",
  previousPrompts: [],
  recentPrompt: "",
  aiResponse: "",
  loading: false,
  showResult: false,
};

export const chatWithAI = createAsyncThunk(
  "chatWithAI/post",
  async (prompt: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await run(prompt);
      return response;
    } catch (error) {
      dispatch(showToast());
      setTimeout(() => {
        dispatch(hideToast());
      }, 5000);
      return rejectWithValue(error);
    }
  }
);

const chatWithAISlice = createSlice({
  name: "chatWithAI",
  initialState,
  reducers: {
    setInputPrompt: (state: any, action: PayloadAction<string>) => {
      state.inputPrompt = action.payload;
    },
    emptyAIResponse: (state: any) => {
      state.aiResponse = "";
    },
    setShowResult: (state: any, action: PayloadAction<boolean>) => {
      state.showResult = action.payload;
    },
    setRecentPrompt: (state: any, action: PayloadAction<string>) => {
      state.recentPrompt = action.payload;
    },
    setPreviousPrompts: (state: any, action: PayloadAction<string>) => {
      state.previousPrompts = [...state.previousPrompts, action.payload];
    },
    createNewChat: (state: any) => {
      state.loading = false;
      state.showResult = false;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(chatWithAI.pending, (state: any) => {
      state.loading = true;
    });

    builder.addCase(
      chatWithAI.fulfilled,
      (state: any, action: PayloadAction<string>) => {
        state.aiResponse = formatResponse(action.payload);
        state.loading = false;
      }
    );
    builder.addCase(chatWithAI.rejected, (state: any) => {
      state.loading = false;
      state.showResult = false;
    });
  },
});

export const getAIResponse = (state: RootState) =>
  state.ChatWithAISlice.aiResponse;
export const getInputPrompt = (state: RootState) =>
  state.ChatWithAISlice.inputPrompt;
export const getShowResult = (state: RootState) =>
  state.ChatWithAISlice.showResult;
export const getRecentPrompt = (state: RootState) =>
  state.ChatWithAISlice.recentPrompt;
export const getLoading = (state: RootState) => state.ChatWithAISlice.loading;
export const getPreviousPrompts = (state: RootState) =>
  state.ChatWithAISlice.previousPrompts;

export const {
  setInputPrompt,
  emptyAIResponse,
  setShowResult,
  setRecentPrompt,
  setPreviousPrompts,
  createNewChat,
} = chatWithAISlice.actions;

export default chatWithAISlice.reducer;
