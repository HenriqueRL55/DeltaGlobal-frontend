// React
import { useState } from "react";

// Services
import { validateCPF } from "../services/validateCPF";

const useFormHandler = () => {
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
    const { name, email, cpf, birthDate } = formData; 
    const missing = [];

    if (!name) missing.push("Nome");
    if (!email) missing.push("E-mail");
    if (!cpf) missing.push("CPF");
    if (!birthDate) missing.push("Data de Nascimento"); 

    return missing;
  };

  const handleFormSubmit = () => {
    const missing = validateRequiredFields();

    const isCpfCurrentlyValid = validateCPF(formData.cpf);
    setIsCpfValid(isCpfCurrentlyValid);

    let alertMessage = "Por favor, preencha os seguintes campos obrigatórios: ";
    if (missing.length > 0 || !isCpfCurrentlyValid) {
      if (missing.length > 0) {
        alertMessage += missing.join(", ");
      }
      if (!isCpfCurrentlyValid) {
        alertMessage += missing.length > 0 ? " e CPF inválido" : "CPF inválido";
      }

      setMissingFields(missing);
      return false;
    } else {
      setMissingFields([]);
      setIsModalOpen(true);
      return true;
    }
  };

  return {
    formData,
    setFormData,
    isModalOpen,
    setIsModalOpen,
    missingFields,
    isCpfValid,
    handleFormSubmit,
  };
};

export default useFormHandler;
