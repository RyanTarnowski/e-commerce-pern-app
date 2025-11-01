import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, logoutUser } from '../../store/user/User.actions';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h2>Account</h2>

            <div>{error}</div>
            <div>
                <label>eCommerce app ID: </label>
                {user.id}
            </div>
            <div>
                <label>Username: </label>
                {user.username}
            </div>
            <div>
                <label>Account Create date: </label>
                {user.created_at}
            </div>
        </div>
    );
}

export default Account;