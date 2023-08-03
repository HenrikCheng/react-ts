import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface colorSlice {
  bgColor: string;
  textColor: string;
  status: "idle" | "loading" | "failed";
}

const initialState: colorSlice = {
  bgColor: "bg-slate-200",
  textColor: "text-black",
  status: "idle",
};

export const ColorSlice = createSlice({
  name: "textColor",
  initialState,
  reducers: {
    updateBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    updateTextColor: (state, action) => {
      state.textColor = action.payload;
    },
  },
});

export const { updateBgColor, updateTextColor } = ColorSlice.actions;

export const selectBgColor = (state: RootState) => state.mouseYColor.bgColor;
export const selectTextColor = (state: RootState) =>
  state.mouseYColor.textColor;

export default ColorSlice.reducer;
