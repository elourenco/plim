import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware('MainContainers',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('MainContainers');

export {
  middleware,
  addListener,
};