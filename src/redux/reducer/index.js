import { combineReducers } from 'redux';
import application from './application/application-reducer';
import nav from './navigation/navigation-reducer';
import sign from './auth/auth-sign-reducer';
import purchase from './purchase/purchase-reducer';
import payment from './payment/payment-reducer';

export default combineReducers({
  application,
  nav,
  profile: sign,
  purchase,
  payment
});