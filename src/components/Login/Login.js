import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/user/User.actions';
import { useNavigate, Link } from 'react-router-dom';

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
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (isAuthenticated){
            navigate('/account');
        };
    }, [isAuthenticated]);

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <label>Username: </label>
                <input name="username" id="username" required onChange={(e) => {setUsername(e.target.value)}} />
                <label>Password: </label>
                <input name="password" id="password" type="password" required minLength={4} maxLength={16} onChange={(e) => {setPassword(e.target.value)}}/>
                <button type="submit">Submit</button>

                {error && <div>{error}</div>}
            </form>

            <br/>
            <div>Don't have an account? <Link to='/register'>Register</Link></div>
        </div> 
    );
}

export default Login;