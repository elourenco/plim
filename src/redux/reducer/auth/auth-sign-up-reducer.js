import { authUpActions } from '../../actions';

const initialState = {
  loading: false,
  error: null,
  email: null,
  cpf: null,
  name: null,
  address: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authUpActions.states.SIGN_UP_PROFILE: {
      return { ...state,
        loading: false, 
        cpf: action.profile.cpf, 
        name: action.profile.name, 
        email: action.profile.email,
        error: null
      };
    }
    case authUpActions.states.SIGN_UP_ADDRESS: {
      return { ...state,
        loading: false,
        error: null,
        address: action.address
      }
    }
    case authUpActions.states.SIGN_UP_VALIDATE: {
      return { ...state, loading: true }
    }
    case authUpActions.states.SIGN_FAILED: {
      return { ...state, loading: false, error: action.error.message }
    }
    default:
      return state;
  }
};