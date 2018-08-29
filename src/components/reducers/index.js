import { combineReducers } from "redux";
import UserReducer from "./reducer_user";

export default combineReducers({
  user: UserReducer
});
