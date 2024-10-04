//React
import React from "react";

//Styled Components
import { CustomSelect, CustomInputLabel } from "../search/styleSearch";

//Material UI
import { MenuItem } from "@mui/material";

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <>
      <CustomInputLabel>{label}</CustomInputLabel>
      <CustomSelect fullWidth name={name} value={value} onChange={onChange} displayEmpty>
        <MenuItem value="">Todos</MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </>
  );
};

export default SelectField;