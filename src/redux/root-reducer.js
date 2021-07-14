// Reducer that combines all other state (reducer) in our app
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";

// JSON object represeting p[ossible configs for redux-persist
const persistConfig = {
  key: "root",
  storage,
  // Which reducers do we want to persist? Include in whitelist
  // array as strings
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
