import { combineReducers } from "redux";
import postReducer from "../reducers/postReducer";
import userReducer from "../reducers/userReducer";

export default combineReducers({
  allposts:postReducer,
  allusers:userReducer,
});
