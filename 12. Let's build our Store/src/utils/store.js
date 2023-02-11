import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Create Store
 *  - configureStore() - Rtk
 *
 * Provide my store to app
 *  - <Provider store={store}> - import from react-redux
 *
 * Slice
 *  -createSlice() - Rtk
 *
 * put that slice into store
 *  - reducer:{
 *          cart: cartSlice,
 *          user: userSlice}
 */
