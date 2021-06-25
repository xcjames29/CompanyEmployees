export const FETCH_COMPANY_DATA = 'FETCH_COMPANY_DATA';
export const FETCH_COMPANY_DATA_SUCCESS = 'FETCH_COMPANY_DATA_SUCCESS';
export const FETCH_COMPANY_DATA_ERROR = 'FETCH_COMPANY_DATA_ERROR';
export const CREATE_NEW_COMPANY = "CREATE_NEW_COMPANY";
export const CREATE_NEW_COMPANY_ERROR = "CREATE_NEW_COMPANY_ERROR";

export let fetchCompanyData = () => ({ type: FETCH_COMPANY_DATA })

export let fetchCompanyDataError = (error) => ({
    type: FETCH_COMPANY_DATA_ERROR,
    payload: error
})

export let fetchCompanyDataSuccess = (company) => ({
    type: FETCH_COMPANY_DATA_SUCCESS,
    payload: company
})


export let getCompanyData = () => {
    return async function (dispatch, getState, args) {
        try {
            dispatch(fetchCompanyData());
            let company = [
                {
                    id: "1",
                    name: "Samsung",
                    address: "qweasdf sadas",
                    revenue:  1000000,
                    phone: "123-123-1232"
                },
                {
                    id: "2",
                    name: "Apple",
                    address: "ksjasj al1234",
                    revenue:  22222222,
                    phone: "123-123-1232"
                },
                {
                    id: "3",
                    name: "Microsoft",
                    address: "America",
                    revenue:  33333333,
                    phone: "123-123-1232"
                },
                {
                    id: "4",
                    name: "Twitter",
                    address: "Near FB",
                    revenue:  4444444,
                    phone: "123-123-1232"
                }
            ]

            dispatch(fetchCompanyDataSuccess(company))
        } catch (error) {
            console.log(error);
            dispatch(fetchCompanyDataError(error.message))
        }
    }
}




export let createNewCompany = (name,address,revenue,phone) => {
    return async function (dispatch, getState, args) {
        try {
            let companyList = getState.companyState.company;
            console.log(companyList)
        } catch (error) {
            console.log(error);
           
        }
    }
}
