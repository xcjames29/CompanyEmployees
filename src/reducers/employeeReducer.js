import { FETCH_EMPLOYEE_DATA, FETCH_EMPLOYEE_DATA_ERROR, FETCH_EMPLOYEE_DATA_SUCCESS } from "../actions/employeeActions"


let initialState = {
    loading: false,
    error: "",
    employees:[]
}

export default function employeeReducer(state = initialState,action){
    switch(action.type){
        case FETCH_EMPLOYEE_DATA:
            return {...state, loading: true}
        case FETCH_EMPLOYEE_DATA_SUCCESS:
            return {...state, employees:action.payload , loading:false }
        case FETCH_EMPLOYEE_DATA_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}