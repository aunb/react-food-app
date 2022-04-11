import axios from 'axios';
import authHeader from './auth/auth-header';
import { interceptor } from './interceptor';

const API_URL = 'https://biocareapi.azurewebsites.net/api/';
class UserService {
   async getPermissions(employeeId) {
   interceptor();
    return axios.get(API_URL + 'Employee/GetPermissions?P_EMPLOYEE_ID='+employeeId,{ headers: authHeader() });
  }
 

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

 async getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
