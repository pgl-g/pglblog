import axios from 'axios';

const service = axios.create({
 baseURL: '/',
 timeout: 30000 // 设置请求超时时间
})
// 请求拦截器
service.interceptors.request.use(
 (config) => {
  // 在请求发送之前做一些token处理
  return config;
 },
 (error) => {
  // 发送失败
  return Promise.reject(error);
 }
)

// 响应拦截器
service.interceptors.response.use((response) => {
  const res = response.data;
  return res;
 },(error) => {
  return Promise.reject(error, '测试数据不存在');
 }
)

	export default service


