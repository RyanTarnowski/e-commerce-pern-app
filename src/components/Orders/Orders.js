import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getOrderDetails } from '../../store/order/Order.actions';
import { useNavigate } from 'react-router-dom';
import  OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const dispatch = useDispatch();
    const { error, orders } = useSelector(state => state.order);
    const { isAuthenticated } = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() => {
            const getUserOrders = async () => {
                try {
                    if (!isAuthenticated){
                        navigate('/login');
                    };

                    await dispatch(getOrders());
                } catch(err) {
                    console.log(err);
                }
            };
    
            getUserOrders();
        }, []);

    const onShowDetails = async (id, showDetails) => {
        try {
           if(showDetails){
                await dispatch(getOrderDetails(id));
            }
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Orders</h2>
            {error && <div>{error}</div>}

            {orders.map((order, index) => (
                <div>
                    <div>{order.id}</div>
                    <div>{order.status}</div>
                    <div>{order.created_at}</div>
                    <div>{order.items_in_order}</div>
                    <div>{order.total}</div>
                    
                    <OrderDetails 
                        key= {order.id}
                        order= {order}
                        onShowDetails= {onShowDetails}
                    />
                    
                </div>
            ))}

        </div>
    );
}

export default Orders;