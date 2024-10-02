import React, { useState } from "react";
import Modal from "../../components/contact/modal/formModal";
import { MainContainer, CustomMainTypography } from "./contactForm.styles";
import ClientInfo from "../../components/contact/clientInfo";
import AddressInfo from "../../components/contact/adressInfo";
import SubmitButton from "../../components/contact/submitButton";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <MainContainer>
      <CustomMainTypography>Formulário de Contato</CustomMainTypography>

      <ClientInfo />
      <AddressInfo />
      <SubmitButton />
      {isModalOpen && (
        <Modal
          onConfirm={() => setIsModalOpen(false)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </MainContainer>
  );
};

export default ContactForm;
