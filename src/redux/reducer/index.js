import { combineReducers } from 'redux';
import application from './application/application-reducer';
import nav from './navigation/navigation-reducer';
import signUp from './auth/auth-sign-up-reducer';

export default combineReducers({
  application,
  nav,
  profile: signUp
});