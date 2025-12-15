import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/user/User.actions';
import { getCart } from '../../store/cart/Cart.actions';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector(state => state.user);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            await dispatch(loginUser({username: username, password: password}));
            await dispatch(getCart());
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (isAuthenticated){
            navigate('/account');
        };
    }, [isAuthenticated, navigate]);

    return (
        <div className='centerdiv'>
            <div className='login'>
                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <label for="username" class="inp">
                        <input type="text" id="username" placeholder="&nbsp;" required onChange={(e) => {setUsername(e.target.value)}}/>
                        <span class="label">Username</span>
                        <span class="focus-bg"></span>
                    </label>

                    <label for="password" class="inp">
                        <input type="password" id="password" placeholder="&nbsp;" required minLength={4} maxLength={16} onChange={(e) => {setPassword(e.target.value)}}/>
                        <span class="label">Password</span>
                        <span class="focus-bg"></span>
                    </label>

                    <button id="loginbtn" type="submit" className='button-base button-green'>Login</button>

                    {error && <div className='error'>{error}</div>}
                </form>

                <br/>
                <div>Don't have an account? <Link to='/register'>Register</Link></div>
            </div> 
        </div>
    );
}

export default Login;