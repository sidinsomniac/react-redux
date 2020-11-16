import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import icecreamReducer from "./icecream/icecreamReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer
});

export default rootReducer;
