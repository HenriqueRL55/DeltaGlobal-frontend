import React, { useState } from "react";
import Modal from "../../components/contact/modal/formModal";
import { MainContainer, CustomMainTypography } from "./contactForm.styles";
import ClientInfo from "../../components/contact/clientInfo";
import AddressInfo from "../../components/contact/adressInfo";
import SubmitButton from "../../components/contact/submitButton";
import { Alert, Grid } from "@mui/material";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    rg: "",
    phone: "",
    birthDate: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    cep: "",
  });

  const validateRequiredFields = () => {
    const { name, email, cpf } = formData;
    const missing = [];

    if (!name) missing.push("Nome");
    if (!email) missing.push("E-mail");
    if (!cpf) missing.push("CPF");

    return missing;
  };

  const handleFormSubmit = () => {
    const missing = validateRequiredFields();

    if (missing.length > 0) {
      setMissingFields(missing);
    } else {
      setMissingFields([]);
      setIsModalOpen(true);
    }
  };

  return (
    <MainContainer>
      <CustomMainTypography>Formulário de Contato</CustomMainTypography>

      {missingFields.length > 0 && (
        <Grid item xs={12}>
          <Alert severity="error">
            Por favor, preencha os seguintes campos obrigatórios:{" "}
            {missingFields.join(", ")}
          </Alert>
        </Grid>
      )}

      <ClientInfo setFormData={setFormData} />
      <AddressInfo setFormData={setFormData} />
      <SubmitButton onSubmit={handleFormSubmit} />

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
