import axios from "axios";

let API_URL = "http://localhost:5000/user";

let defaultOptions = {
  baseURL: API_URL,
};

const axiosInstance = axios.create(defaultOptions);

const requestHandler = (request) => {
  request.headers["request-type"] = "web";
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use((response) =>
  responseHandler(response)
);

export { API_URL, axiosInstance };
