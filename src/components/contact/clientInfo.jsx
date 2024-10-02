import React, { useState } from "react";
import { Grid, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

const ClientInfo = () => {
  const [cpf, setCpf] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(true);

  const handleCpfChange = (event) => {
    const value = event.target.value;
    setCpf(value);
    setIsCpfValid(validateCPF(value));
  };

  return (
    <InfoContainer>
      <CustomTypography>Dados do Cliente</CustomTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7.5}>
          <CustomInputLabel required>Nome</CustomInputLabel>
          <CustomSelect
            slotProps={{
              select: {
                IconComponent: KeyboardArrowDownIcon,
              },
            }}
            label="Selecionar"
            select
            fullWidth
          >
            {clientNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <CustomInputLabel required>E-mail</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="exemplo@exemplo.com.br"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomInputLabel>CPF</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="000.000.000-00"
            value={cpf}
            onChange={handleCpfChange}
            error={!isCpfValid}
            fullWidth
          />
          {!isCpfValid && <p style={{ color: "red" }}>CPF inválido</p>}
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomInputLabel>RG</CustomInputLabel>
          <CustomOutlinedInput placeholder="0000000000" fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomInputLabel>Telefone</CustomInputLabel>
          <CustomOutlinedInput placeholder="(00) 00000-0000" fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomInputLabel required>Data de Nascimento</CustomInputLabel>
          <CustomTextField
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
        </Grid>
      </Grid>
    </InfoContainer>
  );
};

export default ClientInfo;
