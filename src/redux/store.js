import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
/*  creating redux store */
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
