import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/User.actions';
import { useNavigate, Link } from 'react-router-dom';

const MenuBar = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleUserLogout = async (e) => {
        try {
            e.preventDefault();
            await dispatch(logoutUser(user));
            navigate('/login');
        } catch(err) {
            console.log(err);
        }
    }

    const handleUserLogin = async (e) => {
        try {
            e.preventDefault();
            navigate('/login');
        } catch(err) {
            console.log(err);
        }
    }

    const handleUserCart = async (e) => {
        try {
            e.preventDefault();
            navigate('/cart');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>e-Commerce PERN app</h1>

            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        {!isAuthenticated && <li><Link to='/register'>Register</Link></li>}
                        {!isAuthenticated && <li><Link to='/login'>Login</Link></li>}
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/products/:productId'>Product Details</Link></li>
                        {isAuthenticated && <li><Link to='/account'>Account</Link></li>}
                        {isAuthenticated && <li><Link to='/cart'>Cart</Link></li>}
                        {isAuthenticated && <li><Link to='/checkout'>Checkout</Link></li>}
                        {isAuthenticated && <li><Link to='/orders'>Orders</Link></li>}
                        {isAuthenticated && <li><Link to='/orders/:orderId'>Order Details</Link></li>}
                    </ul>
                </nav>
            </div>

            {
                isAuthenticated &&
                <div>
                    Welcome {user.username}
                    <button onClick={handleUserCart}>Cart ({user.id})</button>
                    <button onClick={handleUserLogout}>Logout</button>
                </div>
            }

            {
                !isAuthenticated &&
                <div>
                    <button onClick={handleUserLogin}>Login</button>
                </div>
            }
        </div>
    );
}

export default MenuBar;