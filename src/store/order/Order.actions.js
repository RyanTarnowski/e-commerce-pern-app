import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDBOrders, getDBOrderDetails } from '../../api/order';

export const getOrders = createAsyncThunk(
    'order/getOrder',
    async (order_id, { rejectWithValue }) => {
        try {
            const response = await getDBOrders();
    
            return {
                orders: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);

export const getOrderDetails = createAsyncThunk(
    'order/getOrderDetails',
    async (order_id, { rejectWithValue }) => {
        try {
            const response = await getDBOrderDetails(order_id);

            return {
                orders_details: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);