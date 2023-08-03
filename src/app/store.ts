import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import modalReducer from "../Pages/Modal/modalSlice";
import mouseYColorReducer from "../Pages/Hero/colorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    mouseYColor: mouseYColorReducer,
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
