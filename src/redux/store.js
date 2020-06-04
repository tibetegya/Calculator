import { configureStore } from "@reduxjs/toolkit";
import { reducer as KeypadReducer } from "../components/Keypad/keypadSlice";
import { reducer as screenReducer } from "../components/Screen/screenSlice";

const reducer = {
  keypad: KeypadReducer,
  screen: screenReducer
};

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});
