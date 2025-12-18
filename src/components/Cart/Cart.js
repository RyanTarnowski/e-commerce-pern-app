import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, updateProduct, deleteProduct, checkout } from '../../store/cart/Cart.actions';
import { useNavigate } from 'react-router-dom';
import CartDetails from '../CartDetails/CartDetails';
import Checkout from '../Checkout/Checkout';
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const { error, cartProducts } = useSelector(state => state.cart);
    const { isAuthenticated } = useSelector(state => state.user);
    const navigate = useNavigate();
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
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            navigate('/orders');
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='cart'> 
            <div className='col-60'>
                <h2>Cart</h2>        
                <div className='error'>{error}</div>
                <div className='cartproducts'>
                    {cartProducts.map((product, index) => (
                        <CartDetails
                            key={product.id} 
                            product={product}
                            onUpdateCart={onUpdateCart}
                            onDeleteCart={onDeleteCart}
                        />
                    ))}     
                </div>

                <hr></hr>
                <div className='carttotal'>      
                    <h3>Total:</h3>
                    <h3>
                        {
                            formatter.format(
                                cartProducts.reduce((acc, product) => acc + product.price * product.qty, 0)
                            )
                        }
                    </h3>
                </div>
            </div>
            <Checkout onCheckoutCart={onCheckoutCart}/>
        </div>             
    );
}

export default Cart;