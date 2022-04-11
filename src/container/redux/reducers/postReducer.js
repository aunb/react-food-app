import { ActionTypes } from "../constant/action-types";
const initialState = { 

    posts: [],
    count: '',

};

const post_reducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.GET_POST_SUCCESS:
            return {...state,posts:payload.posts,count:payload.count};
            case 'GET_POST_PENDING':
            return {...state,posts:payload.posts};
        default:
            return state;
    }
}

export default post_reducer;