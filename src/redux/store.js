import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
// We need middle here for redux-logger specifically.
// Also allows us to familiarize ourselves to what middleware does
import logger from "redux-logger";

const middlewares = [logger];

// Spreading middlewares value is scalable
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
