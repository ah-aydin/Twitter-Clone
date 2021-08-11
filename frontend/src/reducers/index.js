import { combineReducers } from "redux";
import auth from "./auth";
import tweet from "./tweet";

export default combineReducers({
    auth,
    tweet
});