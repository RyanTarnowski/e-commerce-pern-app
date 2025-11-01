import { combineReducers } from 'redux';
import userReducer from './user/User.reducers';

export default combineReducers({
  user: userReducer
});