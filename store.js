import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/features/cart/cartSlice";
import orderReducer from "./src/features/Order/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
