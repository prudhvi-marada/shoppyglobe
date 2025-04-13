import { createSlice } from '@reduxjs/toolkit';

/*  creating slice (a piece  of redux store) */
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
        alert("quentity updated in cart")
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
