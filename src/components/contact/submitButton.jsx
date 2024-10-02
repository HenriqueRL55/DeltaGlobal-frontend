import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomButton } from "./stylesComponent";

const SubmitButton = () => {
  return (
    <>
      <CustomButton
        variant="contained"
        sx={{margin:'auto'}}
        endIcon={<ArrowForwardIcon />}
        color="primary"
        type="submit"
      >
        Enviar
      </CustomButton>
    </>
  );
};

export default SubmitButton;
