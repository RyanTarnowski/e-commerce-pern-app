import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './Product.actions';

const initialState = {
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.products = products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.payload;
      })
  }
});

export default productSlice.reducer;
