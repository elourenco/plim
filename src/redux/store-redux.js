import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import { middleware } from '../utils/redux';

const store = {
  configure: () => {
    const logger = createLogger();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(thunk, logger, middleware)
    );
    return createStore(rootReducer, enhancer);
  }
};

export default store;