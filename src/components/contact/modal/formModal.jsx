// React
import React, { useState } from "react";

// Styled Components
import {
  ModalContainer,
  CustomModalTypography,
  ModalContent,
  ButtonGroup,
  ConfirmButton,
  CancelButton,
  InfoGroup,
  TitleField,
  InfoField,
} from "./formModal.styles";

// Material UI
import { Grid } from "@mui/material";

// Components
import ConfirmModal from "../confirmModal/confirmModal";

const Modal = ({ formData, onClose, onConfirm }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };
  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleConfirmAction = () => {
    setIsConfirmModalOpen(false);
    onConfirm();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <img src="src/assets/images/checkIcon.svg" alt="Ícone de Check" />

        <CustomModalTypography>
          Por favor, revise seus dados antes de continuar:
        </CustomModalTypography>

        <InfoGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TitleField>Nome</TitleField>
              <InfoField>{formData.name}</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>E-mail</TitleField>
              <InfoField>{formData.email}</InfoField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TitleField>RG</TitleField>
              <InfoField>{formData.rg}</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>CPF</TitleField>
              <InfoField>{formData.cpf}</InfoField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TitleField>Telefone</TitleField>
              <InfoField>{formData.phone}</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>Data de Nascimento</TitleField>
              <InfoField>{formData.birthDate}</InfoField>
            </Grid>

            <Grid item xs={12} md={12}>
              <TitleField>Endereço</TitleField>
              <InfoField>{`${formData.address} ${formData.number} ${
                formData.complement ? `${formData.complement}` : ""
              } ${formData.neighborhood} ${formData.city} ${
                formData.state
              } CEP: ${formData.cep}`}</InfoField>
            </Grid>
          </Grid>
        </InfoGroup>

        <ButtonGroup>
          <ConfirmButton onClick={handleOpenConfirmModal}>
            Confirmar
          </ConfirmButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonGroup>

        <ConfirmModal
          open={isConfirmModalOpen}
          handleClose={handleCloseConfirmModal}
          handleConfirm={handleConfirmAction}
        />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
