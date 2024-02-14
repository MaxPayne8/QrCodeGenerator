import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "qr",
  initialState: {
    qrorBar: "qr",
    otp: null,
  },
  reducers: {
    addQr: (state, action) => {
      state.qrorBar = action.payload;
    },
    addOtp: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const { addQr, addOtp } = appSlice.actions;

export default appSlice.reducer;
