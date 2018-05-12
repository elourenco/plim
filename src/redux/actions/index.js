import fetchApplicationAction from './application/application-fetch';
import fetchApplicationTypes from './application/application-types';
import signAction from './auth/auth-sign';
import authType from './auth/auth-types';


const applicationActions = {
  fetch: fetchApplicationAction,
  states: {
    ...fetchApplicationTypes
  }
};

const signActions = {
  actions: signAction,
  states: {
    ...authType
  } 
}

export {
  applicationActions,
  signActions,
};