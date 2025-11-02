import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDBProducts } from '../../api/product';

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (user, { rejectWithValue }) => {
    try {
        const response = await getDBProducts();

        return {
            products: response.data
        };
    } catch(err) {
        return rejectWithValue(err.message || 'A network error occurred');
    }
  }
);

