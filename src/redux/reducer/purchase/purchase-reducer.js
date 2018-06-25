import { purchaseActions } from '../../actions';

const initialState = {
  loading: false,
  error: null,
  funders: [],
  fundersByUser: [],
  funderSelected: null,
  purchase: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case purchaseActions.states.PURCHASE_VALIDATE: {
      return { ...state,
        loading: true,
        error: null,
        purchase: null
      }
    }
    case purchaseActions.states.PRUCHASE_CODE_INVALID: {
      return { ...state,
        loading: false,
        error: 'Code invalid',
        purchase: null
      }
    }
    case purchaseActions.states.PURCHASE_CODE_VALIDATED: {
      return { ...state,
        loading: false,
        error: null,
        purchase: action.purchase
      }
    }
    case purchaseActions.states.PURCHASE_LIST_FUNDERS: {
      return { ...state,
        loading: false,
        error: null,
        funders: action.funders,
        funderSelected: null
      };
    }
    case purchaseActions.states.PURCHASE_FUNDERS_BY_USER: {
      return { ...state,
        loading: false,
        error: null,
        fundersByUser: action.fundersByUser,
        funderSelected: null
      };
    }
    case purchaseActions.states.PURCHASE_SELECTED_FUNDER: {
      return { ...state,
        loading: false,
        error: null,
        funderSelected: action.funder
      };
    }
    case purchaseActions.states.PURCHASE_APPLY_FUNDER: {
      return { ...state,
        loading: false,
        error: null
      };
    }
    case purchaseActions.states.PURCHASE_FAILED: {
      return { ...state,
        loading: false,
        error: action.error,
        funders: [],
        funderSelected: null,
        purchase: null
      };
    }
    default:
      return state;
  }
};