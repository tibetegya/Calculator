import { createSlice } from "@reduxjs/toolkit";

const keypadSlice = createSlice({
  name: "keypad",
  initialState: { lastKeyPress: "" },
  reducers: {
    controlIsPressed: (state, action) => {
      state.lastKeyPress = action.payload;
    },
    digitIsPressed: (state, action) => {
      state.lastKeyPress = action.payload;
    }
  }
});

export const { reducer, actions } = keypadSlice;
