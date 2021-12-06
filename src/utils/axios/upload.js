import axios from "axios";

// uploadFileRequest  图片上传
export function sendUpload(url, params = {}) {
  return axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}${url}`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}
