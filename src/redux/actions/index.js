import applicationAction from './application/application-action';
import applicationTypes from './application/application-types';
import signAction from './auth/auth-sign';
import authType from './auth/auth-types';
import purchaseAction from './purchase/purchase-action';
import purchaseType from './purchase/purchase-type';


const applicationActions = {
  fetch: applicationAction,
  states: {
    ...applicationTypes
  }
};

const signActions = {
  actions: signAction,
  states: {
    ...authType
  } 
}

const purchaseActions = {
  actions: purchaseAction,
  states: {
    ...purchaseType
  }
}


export {
  applicationActions,
  signActions,
  purchaseActions
};