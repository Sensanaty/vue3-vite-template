import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default $axios;
