
import axios from './index';


const getUserInfo = () => {
  return axios.get('http://localhost:8890/auth');
}

export {
  getUserInfo
}