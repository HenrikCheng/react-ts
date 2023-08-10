import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  selectedLang: string;
}

const initialState: CounterState = {
  selectedLang: "en-US",
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
