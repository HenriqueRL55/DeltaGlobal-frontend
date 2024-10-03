import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomButton } from "./stylesComponent";

const SubmitButton = ({ onSubmit }) => {
  return (
    <CustomButton
      variant="contained"
      sx={{ margin: "auto" }}
      endIcon={<ArrowForwardIcon />}
      color="primary"
      onClick={onSubmit} 
    >
      Enviar
    </CustomButton>
  );
};

export default SubmitButton;
