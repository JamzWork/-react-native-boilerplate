import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AllReducers from "../Reducers/CombineReducers";
const store = createStore(AllReducers,applyMiddleware(thunk));
export default store;