import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../../store/user/User.actions';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.user);
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const [error2, setError2] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        try {
            e.preventDefault();

            if(newPassword !== newPassword2){
                setError2("Passwords do not match");
                return false;
            } else {
                setError2("");
            }

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
        <div className='centerdiv'>
            <div className='register'>
                <h2>Register</h2>

                <form onSubmit={handleRegister} >
            
                    <label for="username" class="inp">
                        <input type="text" id="username" placeholder="&nbsp;" required onChange={(e) => {setNewUsername(e.target.value)}}/>
                        <span class="label">Username</span>
                        <span class="focus-bg"></span>
                    </label>

                    <label for="password" class="inp">
                        <input type="password" id="password" placeholder="&nbsp;" required minLength={4} maxLength={16} onChange={(e) => {setNewPassword(e.target.value)}}/>
                        <span class="label">Password</span>
                        <span class="focus-bg"></span>
                    </label>

                    <label for="password" class="inp">
                        <input type="password" id="password" placeholder="&nbsp;" required minLength={4} maxLength={16} onChange={(e) => {setNewPassword2(e.target.value)}}/>
                        <span class="label">Confirm Password</span>
                        <span class="focus-bg"></span>
                    </label>

                    {error && <div className='error'>{error}</div>} 
                    {error2 && <div className='error'>{error2}</div>} 
                    <button id="registerbtn" type="submit" className='button-base button-green'>Register</button>        
                </form>

                {
                    message && 
                    <div>
                        <div>{message}</div>
                        <button id="regloginbtn" className='button-base button-green' onClick={handleLogin}>Login</button>
                    </div>    
                }

            </div>
        </div>
    );
}

export default Register;