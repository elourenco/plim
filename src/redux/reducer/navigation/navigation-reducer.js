import Containers from '../../../containers';

const actionForSplashScreen = Containers.router.getActionForPathAndParams('SplashScreen');
const initialState = Containers.router.getStateForAction(actionForSplashScreen);

export default function navigationReducer(state = initialState, action) {
  const nextState = Containers.router.getStateForAction(action, state);
  return nextState || state;
}