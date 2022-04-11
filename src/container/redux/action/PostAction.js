import {ActionTypes} from "../constant/action-types";
import PostApi from "../PostApi";

  // get post 
  export const getPost = () => async (dispatch) => 
  {
      dispatch({
        type:'GET_POST_PENDING',
        payload: {posts: 'isloading'},
      }) 
      return await PostApi.getpost().then(
        (data) => {        
            data.data.status === 200 ?
                dispatch({  
                    type:ActionTypes.GET_POST_SUCCESS,
                    payload: {posts:data.data.data,count:data.data.countposts},
                }) :
                dispatch({
                  type:'GET_POST_FAIL',
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
              type: 'GET_POST_FAIL',
          });
          console.log(message)
          return Promise.reject();
      }
    ).catch((error) => {
        console.log(error)
    });

  }; 
 

  export const searchPost = (postdata) => async (dispatch) => 
  {
      dispatch({
        type:'GET_POST_PENDING',
        payload: {posts: 'isloading'},
      })
      return await PostApi.searchPost(postdata).then(
        (data) => {
            data.data.status === 200 ?
                dispatch({
                    type:ActionTypes.GET_POST_SUCCESS,
                    payload: {posts:data.data.data,count:data.data.countposts},
                }) :
                dispatch({
                  type:'GET_POST_FAIL',
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
              type: 'GET_POST_FAIL',
          });
          console.log(message)
          return Promise.reject();
      }
    ).catch((error) => {
        console.log(error)
    });

  }; 

  export const paginationPost = (postdata) => async (dispatch) => 
  {

      dispatch({
        type:'GET_POST_PENDING',
        payload: {posts: 'isloading'},
      })

      return await PostApi.paginationPost(postdata).then(
        (data) => {
          console.log('req pagination',data);  
            data.data.status === 200 ?
                dispatch({
                    type:ActionTypes.GET_POST_SUCCESS,
                    payload: {posts:data.data.data,count:data.data.countposts},
                }) :
                dispatch({
                  type:'GET_POST_FAIL',
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
              type: 'GET_POST_FAIL',
          });
          console.log(message)
          return Promise.reject();
      }
    ).catch((error) => {
        console.log(error)
    });

  };

  