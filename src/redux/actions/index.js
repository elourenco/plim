import applicationAction from './application/application-action';
import applicationTypes from './application/application-types';
import signAction from './auth/auth-sign';
import authType from './auth/auth-types';
import purchaseAction from './purchase/purchase-action';
import purchaseType from './purchase/purchase-type';
import paymentAction from './payment/payment-action';
import paymentType from './payment/payment-type';


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

const paymentActions = {
  actions: paymentAction,
  states: {
    ...paymentType
  }
}

export {
  applicationActions,
  signActions,
  purchaseActions,
  paymentActions
};