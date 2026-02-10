cat > src/store/CartSlice.jsx <<'EOF'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, description, price, image, category, quantity}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // REQUIRED (rubric)
    addItem: (state, action) => {
      const p = action.payload;
      const existing = state.items.find((it) => it.id === p.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...p, quantity: 1 });
    },

    // REQUIRED (rubric)
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
    },

    // REQUIRED (rubric)
    // payload: { id, delta: 1/-1 } OR { id, quantity: number }
    updateQuantity: (state, action) => {
      const { id, delta, quantity } = action.payload;
      const it = state.items.find((x) => x.id === id);
      if (!it) return;

      if (typeof quantity === "number") it.quantity = quantity;
      else it.quantity += Number(delta || 0);

      if (it.quantity <= 0) {
        state.items = state.items.filter((x) => x.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity * it.price, 0);

export default cartSlice.reducer;
EOF
