import { applicationActions } from '../../actions';

const initialState = {
  initialState: true,
  loading: false,
  payload: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case applicationActions.states.FETCH_APPLICATION: {
      return { ...state, initialState: false, loading: true };
    }
    case applicationActions.states.FETCH_APPLICATION_SUCCESS: {
      const { name, version } = action.payload;
      return { ...state, loading: false, payload: { name, version } };
    }
    default:
      return state;
  }
};