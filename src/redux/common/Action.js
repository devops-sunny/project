import { toast } from "react-hot-toast";
import {
  addDownloadPdfForm,
  addForm,
  deleteForm,
  getAllForm,
  getForm,
  updateForm,
} from "../../services/FormService";
import * as types from "./ActionType";

export const handleNav = () => {
  return {
    type: types.IS_NAV_EXPANDED,
  };
};
export const getAllFormSuccess = (payload) => {
  return { type: types.GET_ALL_FORM_SUCCESS, payload };
};

export const getAllFormFailure = (error) => {
  return { type: types.GET_ALL_FORM_FAILURE, error };
};

export const getFormSuccess = (payload) => {
  return { type: types.GET_FORM_SUCCESS, payload };
};

export const getFormFailure = (error) => {
  return { type: types.GET_FORM_FAILURE, error };
};

export const addFormSuccess = (payload) => {
  return { type: types.ADD_FORM_SUCCESS, payload };
};

export const addFormFailure = (error) => {
  return { type: types.ADD_FORM_FAILURE, error };
};

export const updateFormSuccess = (payload) => {
  return { type: types.UPDATE_FORM_SUCCESS, payload };
};

export const updateRouteOfAdminFailure = (error) => {
  return { type: types.UPDATE_FORM_FAILURE, error };
};

export const deleteFormSuccess = (payload) => {
  return { type: types.DELETE_FORM_SUCCESS, payload };
};

export const deleteFormFailure = (error) => {
  return { type: types.DELETE_FORM_FAILURE, error };
};

export const addDownloadPdfSuccess = (payload) => {
  return { type: types.ADD_DOWNLOAD_PDF_SUCCESS, payload };
};

export const addDownloadPdfFailure = (error) => {
  return { type: types.ADD_DOWNLOAD_PDF_SUCCESS, error };
};

export const getAllFormData = () => {
  return function (dispatch) {
    getAllForm()
      .then((res) => {
        dispatch(getAllFormSuccess(res));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getFormData = (id) => {
  return function (dispatch) {
    getForm(id)
      .then((res) => {
        dispatch(getFormSuccess(res));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const addFormData = (data) => {
  return function (dispatch) {
    addForm(data)
      .then((res) => {
        dispatch(addFormSuccess(res));
        dispatch(getAllFormData());
        toast.success("File added successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const updateFormData = (id, data) => {
  return function (dispatch) {
    updateForm(id, data)
      .then((res) => {
        dispatch(updateFormSuccess(res));
        dispatch(getAllFormData());
        toast.success("File uploaded successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteFormData = (id) => {
  return function (dispatch) {
    deleteForm(id)
      .then((res) => {
        dispatch(deleteFormSuccess(res.message));
        dispatch(getAllFormData());
        toast.success(res.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const addDownloadPdfData = (data, id) => {
  return function (dispatch) {
    addDownloadPdfForm(data, id)
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
        toast.success("File DownloadPd successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};