import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, updateProduct, deleteProduct, checkout } from '../../store/cart/Cart.actions';
import { useNavigate } from 'react-router-dom';
import CartDetails from '../CartDetails/CartDetails';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
    const dispatch = useDispatch();
    const { error, cartProducts } = useSelector(state => state.cart);
    const { isAuthenticated } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
            const getCartItems = async () => {
                try {
                    if (!isAuthenticated){
                        navigate('/login');
                    };

                    await dispatch(getCart());
                } catch(err) {
                    console.log(err);
                }
            };
    
            getCartItems();
        }, []);

    const onUpdateCart = async (id, qty) => {
        try {
            await dispatch(updateProduct({product_id: id, qty: qty}));
            await dispatch(getCart());
        } catch(err) {
            console.log(err);
        }
    };

    const onDeleteCart = async (id) => {
        try {
            await dispatch(deleteProduct(id));
            await dispatch(getCart());
        } catch(err) {
            console.log(err);
        }
    };

    const onCheckoutCart = async (cardInfo) => {
        try {
            await dispatch(checkout(cardInfo));
            await dispatch(getCart());
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div> 
            <h2>Cart</h2>
            
            <div>{error}</div>

            {cartProducts.map((product, index) => (
                <CartDetails
                    key={product.id} 
                    product={product}
                    onUpdateCart={onUpdateCart}
                    onDeleteCart={onDeleteCart}
                />
            ))}

            <Checkout onCheckoutCart={onCheckoutCart}/>
        </div>             
    );
}

export default Cart;