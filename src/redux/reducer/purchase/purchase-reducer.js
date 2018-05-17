import { purchaseActions } from '../../actions';

const initialState = {
  loading: false,
  error: null,
  funders: [],
  funderSelected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case purchaseActions.states.PURCHASE_VALIDATE: {
      return { ...state,
        loading: true,
        error: null,
        funders: [],
        funderSelected: null
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
    case purchaseActions.states.PURCHASE_SELECTED_FUNDER: {
      return { ...state,
        loading: false,
        error: null,
        funderSelected: action.funder
      };
    }
    case purchaseActions.states.PURCHASE_FAILED: {
      return { ...state,
        loading: false,
        error: action.error,
        funders: [],
        funderSelected: null
      };
    }
    default:
      return state;
  }
};