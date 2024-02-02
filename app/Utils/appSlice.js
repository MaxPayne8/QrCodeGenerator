import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "qr",
  initialState: {
    qrorBar: "qr",
  },
  reducers: {
    addQr: (state, action) => {
      state.qrorBar = action.payload;
    },
  },
});

export const { addQr } = appSlice.actions;

export default appSlice.reducer;
