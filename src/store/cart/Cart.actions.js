import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDBCart, AddProductToCart, UpdateProductInCart, DeleteProductFromCart, CheckoutCart } from '../../api/cart';

export const getCart = createAsyncThunk(
    'cart/getCart',
    async (user, { rejectWithValue }) => {
        try {
            const response = await getDBCart();

            return {
                cartProducts: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);

export const addProduct = createAsyncThunk(
    'cart/addProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await AddProductToCart(product);

            return {
                cartProducts: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);

export const updateProduct = createAsyncThunk(
    'cart/updateProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await UpdateProductInCart(product);

            return {
                cartProducts: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'cart/deleteProduct',
    async (product_id, { rejectWithValue }) => {
        try {
            const response = await DeleteProductFromCart(product_id);

            return {
                cartProducts: response.data
            };
        } catch(err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);

export const checkout = createAsyncThunk(
    'cart/checkout',
    async (cartInfo, {rejectWithValue}) => {
        try {
            const response = await CheckoutCart(cartInfo);

            return {
                checkoutResult: response.data
            };
        } catch (err) {
            return rejectWithValue(err.message || 'A network error occurred');
        }
    }
);