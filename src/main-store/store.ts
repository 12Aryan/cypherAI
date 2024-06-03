import { configureStore } from "@reduxjs/toolkit";
import ChatWithAISlice from "../redux/ChatWithAISlice";

export const store = configureStore({
  reducer: {
    ChatWithAISlice: ChatWithAISlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
