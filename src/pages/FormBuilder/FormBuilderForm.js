import React from "react";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { FormProvider, RHFFileUpload, RHFTextField } from "../../hook-form";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFormData, updateFormData } from "../../redux/common/Action";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/[^\s*].*[^\s*]/g, "Only blank spaces is not allowed!"),
 email: Yup.string()
    .required("Name is required")
    .matches(/[^\s*].*[^\s*]/g, "Only blank spaces is not allowed!"),
});

const FormBuilderForm = ({ handleClose, currentRow }) => {
  const defaultValues = currentRow;
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {

    const formData = {
        name:data.name,
        email:data.email
    }
    if (data.id) {
     dispatch(updateFormData(data.id, formData));
    } else {
      dispatch(addFormData(formData));
    }
    handleClose();
  };

  return (
    <>
      <Modal
        title={"Form Builder"}
        onCancel={handleClose}
        loading={isSubmitting}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} className="css-1lwbda4-MuiStack-root">
            <RHFTextField name="name" label="Name *" autoFocus={true} />
            <RHFTextField name="email" label="email *" autoFocus={true} />
          </Stack>
          <div className="model-footer">
            <button
              type="cancel"
              onClick={handleClose}
              className="cancel-btn border-btn"
            >
              Cancel
            </button>
            <button type="cancel" className="Save-btn cmn-btn">
              Upload
            </button>
          </div>
        </FormProvider>
      </Modal>
    </>
  );
};

export default FormBuilderForm;
