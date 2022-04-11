import {ActionTypes} from "../constant/action-types";
import PostApi from "../PostApi";
  // get user

  export const getUser = () => async (dispatch) => 
  { 
      dispatch({
        type:'GET_USER_PENDING',
        payload: 'isloading',
      }) 
      return await PostApi.getuser().then(
        (data) => {   
          console.log('users action',data.data); 
            data.data.status === 200 ?
                dispatch({  
                    type:ActionTypes.GET_USER_SUCCESS,
                    payload: {users:data.data.data},
                }) :
                dispatch({
                  type:'GET_USER_FAIL',
                });
            return Promise.resolve();
        },
        (error) => {
          console.log("error......", error);
          const message =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          dispatch({
              type: 'GET_USER_FAIL',
          });
          console.log(message)
          return Promise.reject();
      }
    ).catch((error) => {
        console.log(error)
    });

  }; 