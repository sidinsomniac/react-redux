import cakeReducer from "./cake/cakeReducers";
import { createStore } from "redux";

const store = createStore(cakeReducer);
export default store;
