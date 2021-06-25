import companyReducer from "./companyReducer";
import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";



export let rootReducer = combineReducers({companyState:companyReducer,employeeState:employeeReducer});