import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Check if item already exists
      const exist = state.items.find((p) => p.id === item.id);

      if (exist) {
        exist.qty += 1;  // If exists → increase qty
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
