import http from "../services/http_common";

const setAuthToken = (token: string) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};
export function getToken(): null | string {
  const accessToken = window.localStorage.getItem("Token");
  return accessToken;
}
export function removeTokens() {
  window.localStorage.removeItem("Token");
  window.localStorage.removeItem("_grecaptcha");
}

export default setAuthToken;
