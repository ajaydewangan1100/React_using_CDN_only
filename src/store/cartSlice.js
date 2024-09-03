import { createSlice } from "@reduxjs/toolkit";

// Creating slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromLast: (state, _action) => {
      state.items.pop();
    },
    clearCart: (state, _action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItemFromLast, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
