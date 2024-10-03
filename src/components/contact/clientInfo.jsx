import React, { useState } from "react";
import { Grid, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputMask from "react-input-mask";
import {
  InfoContainer,
  CustomInputLabel,
  CustomTextField,
  CustomTypography,
  CustomSelect,
  CustomOutlinedInput,
} from "./stylesComponent";
import { clientNames } from "../../data/clientData";
import { validateCPF } from "../../services/validateCPF";

const ClientInfo = ({ setFormData }) => {
  const [cpf, setCpf] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(true);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCpfChange = (event) => {
    const value = event.target.value;
    setCpf(value);
    setIsCpfValid(validateCPF(value));
    handleInputChange("cpf", value);
  };

  return (
    <InfoContainer>
      <CustomTypography>Dados do Cliente</CustomTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7.5}>
          <CustomInputLabel
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#FF4B6A",
              },
            }}
          >
            Nome
          </CustomInputLabel>
          <CustomSelect
            slotProps={{
              select: {
                IconComponent: KeyboardArrowDownIcon,
              },
            }}
            label="Selecionar"
            select
            fullWidth
            onChange={(e) => handleInputChange("name", e.target.value)}
          >
            {clientNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <CustomInputLabel
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#FF4B6A",
              },
            }}
          >
            E-mail
          </CustomInputLabel>
          <CustomOutlinedInput
            placeholder="exemplo@exemplo.com.br"
            fullWidth
            required
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#FF4B6A",
              },
            }}
          >
            CPF
          </CustomInputLabel>
          <InputMask
            mask="999.999.999-99"
            value={cpf}
            onChange={handleCpfChange}
          >
            {() => (
              <CustomOutlinedInput
                placeholder="000.000.000-00"
                error={!isCpfValid}
                fullWidth
              />
            )}
          </InputMask>
          {!isCpfValid && <p style={{ color: "red" }}>CPF inválido</p>}
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel>RG</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="0000000000"
            fullWidth
            onChange={(e) => handleInputChange("rg", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel>Telefone</CustomInputLabel>
          <InputMask
            mask="(99) 99999-9999"
            onChange={(e) => handleInputChange("phone", e.target.value)}
          >
            {() => (
              <CustomOutlinedInput placeholder="(00) 00000-0000" fullWidth />
            )}
          </InputMask>
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel required>Data de Nascimento</CustomInputLabel>
          <CustomTextField
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
          />
        </Grid>
      </Grid>
    </InfoContainer>
  );
};

export default ClientInfo;
