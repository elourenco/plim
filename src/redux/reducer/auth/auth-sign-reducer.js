import { signActions } from '../../actions';

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
    case signActions.states.SIGN_OUT_USER: {
      return { ...state,
        loading: false,
        error: null,
        email: null,
        cpf: null,
        name: null,
        address: null
      }
    }
    case signActions.states.SIGN_PROFILE: {
      return { ...state,
        loading: false, 
        cpf: action.profile.cpf, 
        name: action.profile.name, 
        email: action.profile.email,
        address: action.profile.address,
        error: null
      };
    }
    case signActions.states.SIGN_IN_PROFILE: {
      return { ...state,
        loading: false, 
        cpf: action.profile.cpf, 
        name: action.profile.name, 
        email: action.profile.email,
        address: action.profile.address,
        error: null
      };
    }
    case signActions.states.SIGN_UP_PROFILE: {
      return { ...state,
        loading: false, 
        cpf: action.profile.cpf, 
        name: action.profile.name, 
        email: action.profile.email,
        error: null
      };
    }
    case signActions.states.SIGN_UP_ADDRESS: {
      return { ...state,
        loading: false,
        error: null,
        address: action.address
      }
    }
    case signActions.states.SIGN_VALIDATE: {
      return { ...state, loading: true }
    }
    case signActions.states.SIGN_FAILED: {
      return { ...state, loading: false, error: action.error.message }
    }
    default:
      return state;
  }
};