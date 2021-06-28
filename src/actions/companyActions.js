import databaseRef from "../firebaseConfig";

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
            let company = [];
            let companyData = await databaseRef.collection("CompanyList").get();
            companyData.forEach(e=>{
                let newObj = e.data();
                newObj["id"] = e.id;
                company.push(newObj);
            })

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
            let res = await databaseRef.collection("CompanyList").add({
                name:name,
                address:address,
                phone:phone,
                revenue:parseInt(revenue)
            });
            console.log("Success", res.id)
        } catch (error) {
            console.log(error);
        }
    }
}
