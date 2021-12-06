import http from "./http";
export function sendGet(url, params = {}) {
  return http.get(url, { params }).then((response) => {
    return response.data;
  });
}
export function sendPost(url, data) {
  return http.post(url, data).then((response) => {
    return response.data;
  });
}
export function sendPut(url, data) {
  return http.put(url, data).then((response) => {
    return response.data;
  });
}
export function sendPatch(url, data) {
  return http.patch(url, data).then((response) => {
    return response.data;
  });
}
export function sendDelete(url, params) {
  return http.delete(url, { params }).then((response) => {
    return response.data;
  });
}
