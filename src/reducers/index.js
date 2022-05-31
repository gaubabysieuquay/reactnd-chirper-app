import { combineReducers } from "redux";
import authUser from "./authUser.reducer";
import users from "./users.reducer";
import tweets from "./tweets.reducer";

export default combineReducers({
  authUser,
  users,
  tweets,
});
