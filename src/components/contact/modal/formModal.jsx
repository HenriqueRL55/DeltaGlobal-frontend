import React from "react";
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
import { Grid } from "@mui/material";

const Modal = ({ onClose, onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <img src="src/assets/images/checkIcon.svg" />

        <CustomModalTypography>
          Por favor, revise seus dados antes de continuar:
        </CustomModalTypography>

        <InfoGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TitleField>Nome</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>E-mail</TitleField>
              <InfoField>ricardodasilva@deltaglobal.com.br</InfoField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TitleField>RG</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>CPF</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TitleField>Telefone</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TitleField>Data de Nascimento</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>

            <Grid item xs={12} md={12}>
              <TitleField>Endereço</TitleField>
              <InfoField>Ricardo</InfoField>
            </Grid>
          </Grid>
        </InfoGroup>

        <ButtonGroup>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
