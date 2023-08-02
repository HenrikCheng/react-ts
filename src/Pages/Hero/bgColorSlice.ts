import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TextColorSlice {
  color: string;
  status: "idle" | "loading" | "failed";
}

const initialState: TextColorSlice = {
  color: "to-white",
  status: "idle",
};

export const textColorSlice = createSlice({
  name: "textColor",
  initialState,
  reducers: {
    updateTextColor: (state, action) => {
      state.color = action.payload; // Update the mouseYColor with the new color
    },
  },
});

export const { updateTextColor } = textColorSlice.actions;

export const selectTextColor = (state: RootState) => state.mouseYColor.color;

export default textColorSlice.reducer;
