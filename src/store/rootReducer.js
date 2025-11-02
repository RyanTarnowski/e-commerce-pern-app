import { combineReducers } from 'redux';
import userReducer from './user/User.reducers';
import productReducer from './product/Product.reducers';

export default combineReducers({
  user: userReducer,
  product: productReducer
});