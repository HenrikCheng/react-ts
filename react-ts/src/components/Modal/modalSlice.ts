import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  value: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: false,
  status: "idle",
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleModal } = modelSlice.actions;

export const selectModal = (state: RootState) => state.modal.value;

export default modelSlice.reducer;
