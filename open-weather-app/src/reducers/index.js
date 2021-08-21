import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import datesReducer from "./datesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  calendarReducer,
  datesReducer,
  modalReducer
});

export default rootReducer;