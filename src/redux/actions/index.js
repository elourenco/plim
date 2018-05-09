import fetchApplicationAction from './application/application-fetch';
import fetchApplicationTypes from './application/application-types';
import authUpAction from './auth/auth-sign-up';
import authType from './auth/auth-types';


const applicationActions = {
  fetch: fetchApplicationAction,
  states: {
    ...fetchApplicationTypes
  }
};

const authUpActions = {
  actions: authUpAction,
  states: {
    ...authType
  } 
}

export {
  applicationActions,
  authUpActions
};