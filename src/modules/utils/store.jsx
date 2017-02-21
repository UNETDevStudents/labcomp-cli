import { createStore } from 'redux';

// import Middleware, {
//   LOGGER_MIDDLEWARE,
//   THUNK_MIDDLEWARE
// } from './middlewares/factory';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState, reducers) => (
  createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
