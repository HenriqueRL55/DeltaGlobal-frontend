import React from "react";
import { CustomTextField, CustomInputLabel } from "../search/styleSearch";

export const InputField = ({ label, name, value, onChange, type = "text", placeholder = "", ...rest }) => {
  return (
    <>
      <CustomInputLabel>{label}</CustomInputLabel>
      <CustomTextField
        fullWidth
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};