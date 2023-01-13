import { combineReducers } from "redux";

import bankReducer from "./bankReducer";
import authReducer from "./authReducer";
import { errorReducer } from "./errorReducer";
const rootReducer = combineReducers({ bankReducer, authReducer, errorReducer });

export default rootReducer;
