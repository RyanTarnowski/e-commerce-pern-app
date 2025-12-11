import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/User.actions';
import { useNavigate, Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(state => state.user);
    const { cartProducts } = useSelector(state => state.cart);
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
        <div className='navbar'>
            <div class="dropdown">
                <button class="dropbtn">Menu</button>

                <nav>
                    <ul class="dropdown-content">
                        <li><Link to='/'>Home</Link></li>
                        {!isAuthenticated && <li><Link to='/register'>Register</Link></li>}
                        {!isAuthenticated && <li><Link to='/login'>Login</Link></li>}
                        <li><Link to='/products'>Products</Link></li>
                        {isAuthenticated && <li><Link to='/account'>Account</Link></li>}
                        {isAuthenticated && <li><Link to='/cart'>Cart</Link></li>}
                        {isAuthenticated && <li><Link to='/orders'>Orders</Link></li>}
                    </ul>
                </nav>
            </div>

            <h1>e-Commerce PERN app</h1>

            <div className='navbarRight'>
                {
                    isAuthenticated &&
                    <div>
                        <p>Welcome, {user.username}</p>
                        <button className='cartbtn' onClick={handleUserCart}>Cart ({cartProducts.length})</button>
                        <button className='logoutbtn' onClick={handleUserLogout}>Logout</button>
                    </div>
                }

                {
                    !isAuthenticated &&
                    <div>
                        <button onClick={handleUserLogin}>Login</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default MenuBar;