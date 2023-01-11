import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

RHFFileUpload.propTypes = {
  name: PropTypes.string,
};

export default function RHFFileUpload({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <>
          <input
            accept=".doc, .docx,.pdf"
            type="file"
            onChange={(e) => {
              field.onChange(e.target.files[0]);
            }}
          />
        </>
      )}
    />
  );
}
