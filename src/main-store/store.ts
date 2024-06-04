import { configureStore } from "@reduxjs/toolkit";
import ChatWithAISlice from "../redux/ChatWithAISlice";
import SharedSlice from "../redux/SharedSlice";

export const store = configureStore({
  reducer: {
    ChatWithAISlice: ChatWithAISlice,
    SharedSlice: SharedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
