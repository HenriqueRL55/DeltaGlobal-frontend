// React
import React from "react";

// Styled Components
import {
  CustomDialog,
  CustomModalTypography,
  ConfirmButton,
  CancelButton,
  ButtonGroup,
} from "./confirmModal.styles";


const ConfirmModal = ({ open, handleClose, handleConfirm }) => {
  return (
    <CustomDialog open={open} onClose={handleClose}>
      <CustomModalTypography>
        Você tem certeza que deseja confirmar essa ação?
      </CustomModalTypography>

      <ButtonGroup>
        <ConfirmButton onClick={handleConfirm}>Confirmar</ConfirmButton>
        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
      </ButtonGroup>
    </CustomDialog>
  );
};

export default ConfirmModal;
