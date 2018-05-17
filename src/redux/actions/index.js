import actionApplicationAction from './application/application-action';
import actionApplicationTypes from './application/application-types';
import signAction from './auth/auth-sign';
import authType from './auth/auth-types';


const applicationActions = {
  fetch: actionApplicationAction,
  states: {
    ...actionApplicationTypes
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