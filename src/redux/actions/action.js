import { FETCH_DATA_LOADING,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "./actionTypes";

export const fetchDataLoading = ()=>{
    return {
        type:FETCH_DATA_LOADING
    }
}

export const fetchDataSuccess = (users)=>{
    return {
        type:FETCH_DATA_SUCCESS,
        payload:users
    }
}

export const fetchDataError = (error)=>{
    return {
        type:FETCH_DATA_ERROR,
        payload:error
    }
}
