import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TextColorSlice {
  textIsBlack: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: TextColorSlice = {
  textIsBlack: true,
  status: "idle",
};

export const textColorSlice = createSlice({
  name: "textColor",
  initialState,
  reducers: {
    toggleTextColor: (state) => {
      state.textIsBlack = !state.textIsBlack;
    },
  },
});

export const { toggleTextColor } = textColorSlice.actions;

export const selectTextColor = (state: RootState) =>
  state.textColor.textIsBlack;

export default textColorSlice.reducer;
