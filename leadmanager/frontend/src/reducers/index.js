import { combineReducers } from "redux";
import leads from "./leads";
import errors from './errors'
import messages from './messages'

// Lead Reducer
export default combineReducers({
  leads,
  errors,
  messages
});
