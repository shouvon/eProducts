import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addToCart, removeCartItem } = CartSlice.actions;

export default CartSlice.reducer;
