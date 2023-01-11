import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

export const getAllForm = () => {
  return ApiService.get(API_URL);
};

export const addForm = (data) => {
  return ApiService.post(API_URL, data);
};

export const updateForm = (id, data) => {
  return ApiService.put(API_URL + `/${id}`, data);
};

export const deleteForm = (id) => {
  return ApiService.Delete(API_URL + `/${id}`);
};

export const getForm = (id) => {
  return ApiService.get(API_URL + `/${id}`);
};

export const addDownloadPdfForm = (data, id) => {
  return ApiService.postPdf(API_URL + id + "/download", data);
};
