// Reducer that combines all other state (reducer) in our app
import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});
