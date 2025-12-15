import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../store/user/User.actions';
import { useNavigate } from 'react-router-dom';
import './Account.css';
import dateFormat from "dateformat";

const Account = () => {
    const dispatch = useDispatch();
    const { error, user, isAuthenticated } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                if (!isAuthenticated){
                    navigate('/login');
                };

                await dispatch(userInfo(user));
            } catch(err) {
                console.log(err);
            }
        };

        getUserInfo();
    }, []);

    return (
        <div className='account'>
            <h2>Account</h2>

            <div>{error}</div>
            <div>
                <label>eCommerce App ID: </label>
                <span className='bold'>{user.id}</span>
            </div>
            <div>
                <label>Username: </label>
                <span className='bold'>{user.username}</span>
            </div>
            <div>
                <label>Account Create date: </label>
                <span className='bold'>{dateFormat(user.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT") }</span>
            </div>
        </div>
    );
}

export default Account;