import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload;
      const existing = state.items.find((it) => it.id === p.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...p, quantity: 1 });
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const it = state.items.find((x) => x.id === id);
      if (it) it.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const it = state.items.find((x) => x.id === id);
      if (!it) return;
      it.quantity -= 1;
      if (it.quantity <= 0) {
        state.items = state.items.filter((x) => x.id !== id);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity * it.price, 0);

export default cartSlice.reducer;
