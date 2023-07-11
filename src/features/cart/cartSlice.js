import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    increaseItemCount(state, action) {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );
      selectedItem.quantity = selectedItem.quantity + 1;
    },
    decreaseItemCount(state, action) {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );

      selectedItem.quantity = selectedItem.quantity - 1;
    },
    removeFromCart(state, action) {
      const selectedItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = selectedItem;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getItemCount = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
