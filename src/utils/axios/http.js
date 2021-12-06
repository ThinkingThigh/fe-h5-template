// 引入axios用来封装http请求
import axios from "axios";
import qs from "qs";
import { HTTP_STATUS_MSG_404, HTTP_STATUS_MSG_5XX } from "../../constants/text";
import { Toast } from "vant";

// 创建axios实例常量配置
const axiosConfig = {
  // 根据环境配置后端api的url
  baseURL: process.env.VUE_APP_API_URL,
  // 请求超时时间
  timeout: 30000,
  // 是否允许后端设置cookie跨域，一般无需改动
  // withCredentials: true,
  validateStatus: function (status) {
    // 若状态码大于等于400时则Reject 用来统一处理XX报错走catch方法
    return status < 400;
  },
};

/**
 * 设置post方法的Content-Type
 * 根据后端要求进行application/x-www-form-urlencoded和application/json的替换。
 * 默认application/x-www-form-urlencoded
 * 若是application/json传递，则不需要qs字符串化
 */
const postHeaders = "application/x-www-form-urlencoded";

const http = axios.create(axiosConfig);

http.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "Bearer";
    if (config.method === "post" || config.method === "put") {
      console.log("config.data",config.data)
      config.data = qs.stringify(config.data);
      // 对post和put进行数据字符串化处理，若Content-Type:application/json则不需要
      config.headers["Content-Type"] = postHeaders;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config) => {
    return config.data || {};
  },
  (error) => {
    if (error.response.status === 401) {
      Toast(error.response.data.msg);
    }if (error.response.status === 404) {
      Toast(HTTP_STATUS_MSG_404);
    } else if (error.response.status >= 400 && error.response.status < 500) {
      Toast(error.response.data.msg);
    } else {
      Toast(HTTP_STATUS_MSG_5XX);
    }
    return Promise.reject(error.response);
  }
);

export default http;
