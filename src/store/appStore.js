import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Creating store
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
