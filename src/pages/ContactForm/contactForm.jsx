import React from "react";
import ClientInfo from "../../components/contact/clientInfo";
import AddressInfo from "../../components/contact/adressInfo";
import SubmitButton from "../../components/contact/submitButton";
import { MainContainer, CustomMainTypography } from "./contactForm.styles";

const ContactForm = () => {
  return (
    <MainContainer>
      <CustomMainTypography>Formulário de Contato</CustomMainTypography>
      <ClientInfo />
      <AddressInfo />
      <SubmitButton />
    </MainContainer>
  );
};

export default ContactForm;
