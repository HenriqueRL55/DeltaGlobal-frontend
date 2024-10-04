// React
import React, { useState } from "react";

// Components
import Modal from "../../components/contact/modal/formModal";
import ClientInfo from "../../components/contact/clientInfo";
import AddressInfo from "../../components/contact/adressInfo";
import SubmitButton from "../../components/contact/submitButton";

// Styled Components
import { MainContainer, CustomMainTypography } from "./contactForm.styles";

// Material UI Components
import { Alert, Grid } from "@mui/material";

// Services
import { validateCPF } from "../../services/validateCPF";

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
  const [isCpfValid, setIsCpfValid] = useState(true);

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

    const isCpfCurrentlyValid = validateCPF(formData.cpf);
    setIsCpfValid(isCpfCurrentlyValid);

    if (missing.length > 0 || !isCpfCurrentlyValid) {
      let alertMessage =
        "Por favor, preencha os seguintes campos obrigatórios: ";
      if (missing.length > 0) {
        alertMessage += missing.join(", ");
      }
      if (!isCpfCurrentlyValid) {
        alertMessage += missing.length > 0 ? " e CPF inválido" : "CPF inválido";
      }

      setMissingFields(missing);
    } else {
      setMissingFields([]);
      setIsModalOpen(true);
    }
  };

  return (
    <MainContainer>
      <CustomMainTypography>Formulário de Contato</CustomMainTypography>

      {missingFields.length > 0 || !isCpfValid ? (
        <Grid item xs={12}>
          <Alert severity="error">
            {missingFields.length > 0 && (
              <>
                Por favor, preencha os seguintes campos obrigatórios:{" "}
                {missingFields.join(", ")}
              </>
            )}
            {!isCpfValid && (
              <span>
                {missingFields.length > 0
                  ? " e o CPF está inválido."
                  : "O CPF está inválido"}
              </span>
            )}
          </Alert>
        </Grid>
      ) : null}

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
