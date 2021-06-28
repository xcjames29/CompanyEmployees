import databaseRef from "../firebaseConfig";

export const FETCH_EMPLOYEE_DATA = "FETCH_EMPLOYEE_DATA";
export const FETCH_EMPLOYEE_DATA_ERROR = "FETCH_EMPLOYEE_DATA_ERROR";
export const FETCH_EMPLOYEE_DATA_SUCCESS = "FETCH_EMPLOYEE_DATA_SUCCESS";


export let fetchEmployeeData = () => ({ type: FETCH_EMPLOYEE_DATA })

export let fetchEmployeeDataError = (error) => ({
    type: FETCH_EMPLOYEE_DATA_ERROR,
    payload: error
})

export let fetchEmployeeDataSuccess = (employee) => ({
    type: FETCH_EMPLOYEE_DATA_SUCCESS,
    payload: employee
})


export let getEmployeeData = () => {
    return async function (dispatch, getState, args) {
        try {
            dispatch(fetchEmployeeData());
            let employee = [];
            let employeeData = await databaseRef.collection("EmployeeList").get();
            employeeData.forEach(e=>{
                let newObj =  e.data();
                newObj["id"] = e.id;
                employee.push(newObj);
            })
            dispatch(fetchEmployeeDataSuccess(employee))
        } catch (error) {
            console.log(error);
            dispatch(fetchEmployeeDataError(error.message))
        }
    }
}


export let addEmployeeData = (name,address,companyID) => {
    return async function (dispatch, getState, args) {
        try {
            let employeeData = await databaseRef.collection("EmployeeList").add({
                name:name,
                address:address,
                companyID:companyID
            });
            console.log("Result Success",employeeData.id)
        } catch (error) {
            console.log(error);
        }
    }
}