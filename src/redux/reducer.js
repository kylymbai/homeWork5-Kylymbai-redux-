import { combineReducers } from "redux";
import { incrementReducer } from "./reducers/incrementReducer";

export const rootReducer = combineReducers({
    incrementReducer
})