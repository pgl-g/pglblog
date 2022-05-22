
import axios from './index';


const login = () => {
  return axios.get('/apis/account/user/login');
}

export {
  login
}