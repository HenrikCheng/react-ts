import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import modalReducer from "../Pages/Modal/modalSlice";
import coloursReducer from "../Pages/Hero/colorSlice";
import langReducer from "../components/LangSelect/langSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    colours: coloursReducer,
    selectedLang: langReducer,
    // scrollAnchor: scrollAnchorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
