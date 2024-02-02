import { configureStore } from "@reduxjs/toolkit";
import qrReducer from "./appSlice";

const appStore = configureStore({
  reducer: {
    qr: qrReducer,
  },
});

export default appStore;
