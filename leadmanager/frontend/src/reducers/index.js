import { combineReducers } from "redux";
import leads from "./leads";
import errors from './errors'
// Lead Reducer
export default combineReducers({
  leads,
  errors
});
