import { createSlice } from "@reduxjs/toolkit";
import { shareSliceType } from "../types/SharedSliceType";
import { RootState } from "../main-store/store";

const initialState: shareSliceType = {
  toaster: false,
};

export const SharedSlice = createSlice({
  name: "SharedSlice",
  initialState: initialState,
  reducers: {
    showToast: (state: any) => {
      state.toaster = true;
    },
    hideToast: (state: any) => {
      state.toaster = false;
    },
  },
  extraReducers: (builder) => {},
});

export const getToast = (state: RootState) => state.SharedSlice.toaster;

export const { showToast, hideToast } = SharedSlice.actions;

export default SharedSlice.reducer;
