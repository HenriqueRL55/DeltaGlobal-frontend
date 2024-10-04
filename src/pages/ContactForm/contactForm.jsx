import React, { useState } from "react";
import Modal from "../../components/contact/modal/formModal";
import ClientInfo from "../../components/contact/clientInfo";
import AddressInfo from "../../components/contact/adressInfo";
import SubmitButton from "../../components/contact/submitButton";
import { MainContainer, CustomMainTypography } from "./contactForm.styles";
import { Grid, Alert } from "@mui/material";
import useFormHandler from "../../hooks/useFormHandler";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialState = {};
  const { formData, setFormData, isCpfValid, missingFields, handleFormSubmit } =
    useFormHandler(initialState);

  const handleFormConfirmation = () => {
    if (handleFormSubmit()) {
      setIsModalOpen(true);
    }
  };

  return (
    <MainContainer>
      <CustomMainTypography>Formulário de Contato</CustomMainTypography>
      {missingFields.length > 0 || !isCpfValid ? (
        <Grid item xs={12}>
          <Alert severity="error">
            {missingFields.join(", ") || "CPF inválido"}
          </Alert>
        </Grid>
      ) : null}
      <ClientInfo setFormData={setFormData} />
      <AddressInfo setFormData={setFormData} />
      <SubmitButton onSubmit={handleFormConfirmation} />
      {isModalOpen && (
        <Modal
          formData={formData}
          onConfirm={() => setIsModalOpen(false)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </MainContainer>
  );
};

export default ContactForm;
