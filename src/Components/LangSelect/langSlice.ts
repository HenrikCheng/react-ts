import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  selectedLang: string;
}

const savedLocale = localStorage.getItem("locale");
const initialState: CounterState = {
  selectedLang: savedLocale || "en-US",
};

export const langSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateLang: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
});

export const { updateLang } = langSlice.actions;

export const selectedLang = (state: RootState) =>
  state.selectedLang.selectedLang;

export default langSlice.reducer;
