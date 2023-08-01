import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  modal: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  modal: false,
  status: "idle",
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { toggleModal } = modelSlice.actions;

export const selectModal = (state: RootState) => state.modal.modal;

export default modelSlice.reducer;
