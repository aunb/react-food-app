
import axios from 'axios';

export const interceptor = () => {
    return (
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      // Do something with response error
      if(error.response.status === 401){
        localStorage.removeItem("user");
        localStorage.removeItem("permissionsList");
        window.location.href = '/login'
      }
      else if (error.response.status === 403){
        
      }
    })
    )
}

