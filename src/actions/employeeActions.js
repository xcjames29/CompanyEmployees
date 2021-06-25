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
            let employee = [
                {
                    id: "1",
                    name: "Samsung Sam",
                    address: "qweasdf sadas",
                    companyID: "1"
                },
                {
                    id: "2",
                    name: "Siri",
                    address: "ksjasj al1234",
                    companyID: "2"
                },
                {
                    id: "3",
                    name: "Cortana",
                    address: "America",
                    companyID: "3"
                },
                {
                    id: "4",
                    name: "Trump ",
                    address: "Near FB",
                    companyID:"4"
                }
            ]

            dispatch(fetchEmployeeDataSuccess(employee))
        } catch (error) {
            console.log(error);
            dispatch(fetchEmployeeDataError(error.message))
        }
    }
}