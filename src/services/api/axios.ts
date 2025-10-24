import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const login = axios.create({
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});
export const register = axios.create();

export const getSolicitacoes = axios.create();
