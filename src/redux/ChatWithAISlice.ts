import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../main-store/store";
import run from "../config/gemini";

interface ChatWithAIType {
  aiResponse: string | null;
  inputPrompt: string;
  previousPrompts: Array<string>;
  loading: boolean;
}

const initialState: ChatWithAIType = {
  aiResponse: null,
  inputPrompt: "",
  previousPrompts: [],
  loading: false,
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
  },
  extraReducers: (builder: any) => {
    builder.addCase(chatWithAI.pending, (state: any) => {
      state.loading = true;
    });

    builder.addCase(
      chatWithAI.fulfilled,
      (state: any, action: PayloadAction<string>) => {
        state.aiResponse = action.payload;
        state.loading = false;
      }
    );
  },
});

export const getAIResponse = (state: RootState) =>
  state.ChatWithAISlice.aiResponse;
export const getInputPrompt = (state: RootState) =>
  state.ChatWithAISlice.inputPrompt;

export const { setInputPrompt } = chatWithAISlice.actions;

export default chatWithAISlice.reducer;
