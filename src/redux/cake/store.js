import cakeReducer from "./cakeReducers";
import { createStore } from "redux";

const store = createStore(cakeReducer);
export default store;
