import { combineReducers } from 'redux';
import application from './application/application-reducer';
import nav from './navigation/navigation-reducer';
import sign from './auth/auth-sign-reducer';

export default combineReducers({
  application,
  nav,
  profile: sign
});