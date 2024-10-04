// React
import React from "react";

// Material UI Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Styled Components
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
