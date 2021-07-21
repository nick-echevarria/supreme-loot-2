import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
// We need middle here for redux-logger specifically.
// Also allows us to familiarize ourselves to what middleware does
import logger from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Spreading middlewares value is scalable
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
