import axios from 'axios';
// import authHeader from './auth/auth-header';
// import { interceptor } from './interceptor';

const API_URL = 'http://127.0.0.1:8000/api/';
class PostApi {
  //  async getPermissions(employeeId) {
  //  interceptor();
  //   return axios.get(API_URL + 'Employee/GetPermissions?P_EMPLOYEE_ID='+employeeId,{ headers: authHeader() });
  // }
 

  getpost() {
    return axios.get(API_URL + 'post', );
  }

  searchPost(postdata) {
    return axios.post(API_URL + 'search_posts', postdata);
  }
  paginationPost(postdata) {
    return axios.post(API_URL + 'pagination', postdata);
  }

  getuser() {
    return axios.get(API_URL + 'contacts',);
  }

//  async getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new PostApi();
