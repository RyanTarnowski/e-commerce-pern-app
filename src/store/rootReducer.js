import { combineReducers } from 'redux';
import userReducer from './user/User.reducers';
import productReducer from './product/Product.reducers';
import cartReducer from './cart/Cart.reducers';
import orderReducer from './order/Order.reducers';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer
});