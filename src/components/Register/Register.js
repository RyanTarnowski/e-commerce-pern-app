import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../../store/user/User.actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.user);
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        try {
            e.preventDefault();
            await dispatch(registerUser({username: newUsername, password: newPassword}));
        } catch(err) {
            console.log(err);
        }
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            await dispatch(loginUser({username: newUsername, password: newPassword}));
            navigate('/account');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <label>Username: </label>
                <input name="username" id="username" required onChange={(e) => {setNewUsername(e.target.value)}} />
                <label>Password: </label>
                <input name="password" id="password" type="password" required minLength={4} maxLength={16} onChange={(e) => {setNewPassword(e.target.value)}}/>
                <button type="submit">Submit</button>

                {error && <div>{error}</div>}
            </form>

            {
                message && 
                <div>
                    <div>{message}</div>
                    <button onClick={handleLogin}>Login</button>
                </div>    
            }

        </div>
    );
}

export default Register;