import { createSlice } from "@reduxjs/toolkit";
import { actions as keyPadActions } from "../Keypad/keypadSlice";
const screenSlice = createSlice({
  name: "screen",
  initialState: {
    control: "",
    prevDigit: "",
    display: ""
  },
  extraReducers: {
    [keyPadActions.controlIsPressed]: (state, action) => {
      state.control = action.payload;
      state.display = "";
    },
    [keyPadActions.digitIsPressed]: (state, action) => {
      const newDigit = `${state.prevDigit}${action.payload}`;
      state.display = newDigit;
      state.prevDigit = newDigit;
    }
  }
});

export const { reducer, actions } = screenSlice;
