import { paymentActions } from '../../actions';

const initialState = {
  loading: false,
  error: null,
  monthlyStatement: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case paymentActions.states.PAYMENT_VALIDATE: {
      return { ...state,
        loading: true
      }
    }
    case paymentActions.states.PAYMENT_MONTHLY_STATEMENT: {
      return { ...state,
        loading: false,
        monthlyStatement: action.monthlyStatement
      };
    }
    case paymentActions.states.PAYMENT_FAILED: {
      return { ...state,
        loading: false,
        error: action.error,
        monthlyStatement: []
      };
    }
    default:
      return state;
  }
};