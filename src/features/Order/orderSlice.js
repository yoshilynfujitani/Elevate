import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    confirmOrder(state, action) {
      action.payload.map((item) => state.order.push(item));
    },
  },
});

export const { confirmOrder } = orderSlice.actions;

export default orderSlice.reducer;

export const getOrder = (state) => state.order.order;
