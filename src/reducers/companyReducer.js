import {FETCH_COMPANY_DATA,FETCH_COMPANY_DATA_SUCCESS,FETCH_COMPANY_DATA_ERROR} from "../actions/companyActions"


let initialState = {
    loading: false,
    error: "",
    company:[]
}

export default function companyReducer(state = initialState,action){
    switch(action.type){
        case FETCH_COMPANY_DATA:
            return {...state, loading: true}
        case FETCH_COMPANY_DATA_SUCCESS:
            return {...state, company:action.payload , loading:false }
        case FETCH_COMPANY_DATA_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}