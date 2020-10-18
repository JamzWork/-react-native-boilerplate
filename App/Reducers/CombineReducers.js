import { combineReducers } from "redux";
import { LoadingSpinner } from "./LoadingSpinner"; 

// Combine all reducers here
const AllReducers = combineReducers({
    LoadingSpinner: LoadingSpinner,
})

export default AllReducers;
