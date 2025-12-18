import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getOrderDetails } from '../../store/order/Order.actions';
import { useNavigate } from 'react-router-dom';
import  OrderDetails from '../OrderDetails/OrderDetails';
import "./Orders.css";

const Orders = () => {
    const dispatch = useDispatch();
    const { error, orders } = useSelector(state => state.order);
    const { isAuthenticated } = useSelector(state => state.user);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options can be used to round to whole numbers.
        trailingZeroDisplay: 'stripIfInteger'   // This is probably what most people
                                                // want. It will only stop printing
                                                // the fraction when the input
                                                // amount is a round number (int)
                                                // already. If that's not what you
                                                // need, have a look at the options
                                                // below.
        //minimumFractionDigits: 0, // This suffices for whole numbers, but will
                                    // print 2500.10 as $2,500.1
        //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
    });

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
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        <div className='orders'>
            <h2>Orders</h2>
            {error && <div>{error}</div>}

            {orders.map((order) => (
                <div className='order'>     
                    <table>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Status</th>
                                <th>Order Date</th>
                                <th># of Order Lines</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.status}</td>
                                <td>{order.created_at}</td>
                                <td>{order.items_in_order}</td>
                                <td>{formatter.format(order.total)}</td>
                            </tr>
                        </tbody>
                    </table>

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