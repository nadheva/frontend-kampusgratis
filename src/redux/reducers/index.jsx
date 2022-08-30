import { combineReducers } from "redux";
import KontakReducer from "./kontak";
import AuthReducer from "./auth";

export default combineReducers({
  KontakReducer,
  AuthReducer
});
