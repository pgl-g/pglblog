import axios from 'axios';
import { Message } from 'antd';
import api from './api';

const request = axios.create({
  timeout: 3000,
  baseURL: '/',
  headers: {
    'content-type': 'application/json'
  }
});


// 请求响应拦截
request.interceptors.response.use((res) => {
  console.log(res);
})

function createApi(config) {
  return (data) => {
      // const { lang, auth, cloudToken } = window.localStorage
      Object.assign(config, {
          // headers: {
              // 'Accept-Language': lang,
              // Authorization: auth || '',
              // Auth: auth || '',
              // 'exchange-token': cloudToken || '',
          // },
      })
      if (config.method === 'get') {
          return request({
              ...config,
              params: {
                  ...data,
                  _t: Date.now()
              }
          }).catch((e) => {
              if (e) Message.error(e.message || e.msg)
              return e || {}
          })
      }
      return request({
          ...config,
          data: {
              ...data,
          }
      }).catch((e) => {
          if (e) Message.error(e.message || e.msg)
          return e || {}
      })
  }
}
const apis = {}

Object.entries(api).forEach((item) => {
  apis[item[0]] = createApi(item[1])
})

export default request;