//React
import React from "react"; 

// Material UI
import { Grid, TextField, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Data
import InputMask from "react-input-mask";
import { clientNames } from "../../data/clientData";

//Services
import { validateCPF } from "../../services/validateCPF";

// Material UI 
import {
  InfoContainer,
  CustomInputLabel,
  CustomOutlinedInput,
  CustomTypography,
  CustomAutocomplete,
} from "./stylesComponent";


const ClientInfo = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCpfChange = (event) => {
    const value = event.target.value;
    const cleanValue = value.replace(/\D/g, "");
    handleInputChange("cpf", value);

    if (cleanValue.length === 11) {
      const isValid = validateCPF(cleanValue);
      setFormData((prev) => ({ ...prev, isCpfValid: isValid }));
    } else {
      setFormData((prev) => ({ ...prev, isCpfValid: true }));
    }
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

          <CustomAutocomplete
            freeSolo
            fullWidth
            options={clientNames}
            value={formData.name || ""}
            onInputChange={(event, newInputValue) =>
              handleInputChange("name", newInputValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Buscar Cliente"
                required
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {params.InputProps.endAdornment}
                      <InputAdornment position="end">
                        <KeyboardArrowDownIcon />
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={4.5}>
          <CustomInputLabel required>E-mail</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="exemplo@exemplo.com.br"
            fullWidth
            required
            value={formData.email || ""}
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
            value={formData.cpf || ""}
            onChange={handleCpfChange}
          >
            {() => (
              <CustomOutlinedInput
                placeholder="000.000.000-00"
                error={formData.isCpfValid === false}
                fullWidth
              />
            )}
          </InputMask>
          {formData.isCpfValid === false && (
            <p style={{ color: "red" }}>CPF inválido</p>
          )}
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel>RG</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="0000000000"
            fullWidth
            inputProps={{ maxLength: 10 }}
            value={formData.rg || ""}
            onChange={(e) => handleInputChange("rg", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <CustomInputLabel>Telefone</CustomInputLabel>
          <InputMask
            mask="(99) 99999-9999"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          >
            {() => (
              <CustomOutlinedInput placeholder="(00) 00000-0000" fullWidth />
            )}
          </InputMask>
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
            Data de Nascimento
          </CustomInputLabel>
          <CustomOutlinedInput
            type="date"
            fullWidth
            required
            value={formData.birthDate || ""}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
          />
        </Grid>
      </Grid>
    </InfoContainer>
  );
};

export default ClientInfo;
