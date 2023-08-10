import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LOCALES } from "../../i18n/locales";

export interface CounterState {
  selectedLang: string;
}

const savedLocale = localStorage.getItem("locale");
const initialState: CounterState = {
  selectedLang: savedLocale || LOCALES.ENGLISH,
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
