import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ModalState {
  showModal: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: ModalState = {
  showModal: false,
  status: "idle",
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleModal } = modelSlice.actions;

export const selectModal = (state: RootState) => state.modal.showModal;

export default modelSlice.reducer;
