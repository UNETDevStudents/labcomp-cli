import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import Middleware, {
//   LOGGER_MIDDLEWARE,
//   THUNK_MIDDLEWARE
// } from './middlewares/factory';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState, reducers) => (
  createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    ),
  )
);
