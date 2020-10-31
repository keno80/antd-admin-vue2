import axios from 'axios'
import router from '@/router'
import {message} from 'ant-design-vue'

//未授权以及token过期情况处理
const goLogin = () => {
  router.push({
    path: '/login'
  })
}

//错误弹窗
const pop = msg => {
  message.error({
    content: msg,
    duration: 3
  })
};

// 错误码
const errNum = (num) => {
  switch (num) {
    case 401:
      pop('未授权')
      goLogin()
      break;
    case 403:
      pop('登录已过期，请重新登录');
      sessionStorage.removeItem('submit_token')
      goLogin()
      break;
    case 404:
      pop('页面未找到')
      break;
    default:
      pop('请求失败')
  }
};

//创建axios实例
const instance = axios.create({
  timeout: 30000,
})

//请求地址
export const baseurl = {
  prod: 'http://192.168.2.109:8080'
}

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//创建请求拦截器
instance.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('submit_token')) {
      config.headers['Authorization'] = 'Bearer' + sessionStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error + '错误')
  }
);

//创建响应拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else if (res.data.code === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    const {response} = error;
    if (response) {
      errNum(response.status, response.data.code);
      return Promise.reject(response)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance