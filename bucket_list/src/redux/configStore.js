import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import bucket from "./modules/bucket";

const middlewars = [thunk];
const rootReducer = combineReducers({ bucket });
const enhancer = applyMiddleware(...middlewars);

const store = createStore(rootReducer, enhancer);

export default store;
