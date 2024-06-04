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
    showToast: (state: shareSliceType) => {
      state.toaster = true;
    },
    hideToast: (state: shareSliceType) => {
      state.toaster = false;
    },
  },
  extraReducers: () => {},
});

export const getToast = (state: RootState) => state.SharedSlice.toaster;

export const { showToast, hideToast } = SharedSlice.actions;

export default SharedSlice.reducer;
