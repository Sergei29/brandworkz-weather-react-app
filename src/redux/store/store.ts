import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

/**
 * @description redux devtools, find if has in Chrome
 */
const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

/**
 * @description redux devtools, use if in Development mode
 */
const composeEnhancers =
  process.env.NODE_ENV === "development" ? reduxDevTools : compose;

/**
 * @description list of middlewares ( thunk, logger, etc...)
 */
const arrMiddlewares = [thunk];

/**
 * @description redux application store
 */
const objApplicationStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...arrMiddlewares))
);

export default objApplicationStore;
