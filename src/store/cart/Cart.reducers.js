import { createSlice } from '@reduxjs/toolkit';
import { getCart, addProduct, updateProduct, deleteProduct, checkout } from './Cart.actions';

const initialState = {
  error: null,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        const { cartProducts } = action.payload;
        state.cartProducts = cartProducts;
        state.error = null;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.cartProducts = [];
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        //const { cartProducts } = action.payload;
        //state.cartProducts = cartProducts;
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.cartProducts = [];
        state.error = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        //const { cartProducts } = action.payload;
        //state.cartProducts = cartProducts;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        //state.cartProducts = [];
        state.error = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        //const { cartProducts } = action.payload;
        //state.cartProducts = cartProducts;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        //state.cartProducts = [];
        state.error = action.payload;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(checkout.rejected, (state, action) => {
        state.error = action.payload;
      })
  }
});

export default cartSlice.reducer;