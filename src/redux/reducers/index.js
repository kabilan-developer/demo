import { FETCH_DATA_LOADING,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "../actions/actionTypes";

const initialState = {
    loading: true,
    users:[],
    error:''
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_DATA_LOADING:
            return{
                ...state,
                loading:true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                users:action.payload
            }
        case FETCH_DATA_ERROR:
            return{
                ...state,
                users:[],
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;