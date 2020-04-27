import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from "./authedUser";
import tweets from "./tweets"
import users from "./users"

export default combineReducers ({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer
})