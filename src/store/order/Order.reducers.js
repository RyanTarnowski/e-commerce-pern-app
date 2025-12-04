import { createSlice } from '@reduxjs/toolkit';
import { getOrders, getOrderDetails } from './Order.actions';

const initialState = {
  error: null,
  orders: [
    {
        details: []
    }
  ]
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.fulfilled, (state, action) => {
        const { orders } = action.payload;
        state.orders = orders;
        state.error = null 
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.orders = [];
        state.error = action.payload;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        const { orders_details } = action.payload;
        const i = state.orders.findIndex(x => x.id === orders_details[0].id)

        state.orders[i].details = orders_details
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.cartProducts = [];
        state.error = action.payload;
      })
  }
});

export default orderSlice.reducer;