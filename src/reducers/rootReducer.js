import { combineReducers } from "redux";

import bankReducer from "./bankReducer";
import authReducer from "./authReducer";
import { errorReducer } from "./errorReducer";
import overviewReducer from "./overviewReducer";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";
const rootReducer = combineReducers({
  bankReducer,
  authReducer,
  errorReducer,
  overviewReducer,
  userReducer,
  contactReducer,
});

export default rootReducer;
