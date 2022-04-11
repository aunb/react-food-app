import { ActionTypes } from "../constant/action-types";
const initialState = { 
    getusers: [],
};

const user_reducer = (state=initialState, {type,payload}) => {

    switch (type) {
        case ActionTypes.GET_USER_SUCCESS:
            return {...state,getusers:payload.users};
        case 'GET_USER_PENDING':
            return {...state,getusers:payload};
        default:
            return state;
    }
}

export default user_reducer;