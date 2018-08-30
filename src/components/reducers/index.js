import { combineReducers } from "redux";
import UserReducer from "./reducer_user";
import DeleteUserReducer from "./reducer_deleteUser";

export default combineReducers({
  user: UserReducer,
  deleted: DeleteUserReducer
});
