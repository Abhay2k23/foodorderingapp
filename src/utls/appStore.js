import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utls/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
