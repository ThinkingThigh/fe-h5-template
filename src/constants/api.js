import { sendGet } from "../utils/axios/request";
// import { sendGet, sendPost } from "../utils/axios/request";
// import { sendUpload } from "../utils/axios/upload";
// 登录
export const login = (data) => sendGet("/login", data);
