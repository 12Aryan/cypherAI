import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../main-store/store";
import run from "../config/gemini";
import { formatResponse } from "../utils/GlobalUtils";

interface ChatWithAIType {
  aiResponse: string | null;
  inputPrompt: string;
  recentPrompt: string;
  previousPrompts: Array<string>;
  loading: boolean;
  showResult: boolean;
}

const initialState: ChatWithAIType = {
  inputPrompt: "",
  previousPrompts: [],
  recentPrompt: "",
  aiResponse: null,
  loading: false,
  showResult: false,
};

export const chatWithAI = createAsyncThunk(
  "chatWithAI/post",
  async (prompt: string) => {
    const response = await run(prompt);
    return response;
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
    setShowResult: (state: any, action) => {
      state.showResult = action.payload;
    },
    setRecentPrompt: (state: any, action) => {
      state.recentPrompt = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(chatWithAI.pending, (state: any) => {
      state.loading = true;
    });

    builder.addCase(
      chatWithAI.fulfilled,
      (state: any, action: PayloadAction<string>) => {
        console.log(action.payload);

        state.aiResponse = formatResponse(action.payload);
        state.loading = false;
      }
    );
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

export const {
  setInputPrompt,
  emptyAIResponse,
  setShowResult,
  setRecentPrompt,
} = chatWithAISlice.actions;

export default chatWithAISlice.reducer;
