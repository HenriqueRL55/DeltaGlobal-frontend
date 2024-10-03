import React from "react";
import { Grid, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  InfoContainer,
  CustomInputLabel,
  CustomTypography,
  CustomSelect,
  CustomOutlinedInput,
} from "./stylesComponent";
import { brazilStates } from "../../data/clientData";

const AddressInfo = ({ setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <InfoContainer>
      <CustomTypography>Endereço</CustomTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <CustomInputLabel>CEP</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="00000-000"
            fullWidth
            onChange={(e) => handleInputChange('cep', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInputLabel>Endereço</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="Rua Olinda"
            fullWidth
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <CustomInputLabel>Número</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="140"
            fullWidth
            onChange={(e) => handleInputChange('number', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <CustomInputLabel>Complemento</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="5º Andar"
            fullWidth
            onChange={(e) => handleInputChange('complement', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInputLabel>Bairro</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="São Geraldo"
            fullWidth
            onChange={(e) => handleInputChange('neighborhood', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInputLabel>Cidade</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="Porto Alegre"
            fullWidth
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInputLabel>Estado</CustomInputLabel>
          <CustomSelect
            slotProps={{
              select: {
                IconComponent: KeyboardArrowDownIcon,
              },
            }}
            label="Selecionar"
            fullWidth
            onChange={(e) => handleInputChange('state', e.target.value)}
          >
            {brazilStates.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
      </Grid>
    </InfoContainer>
  );
};

export default AddressInfo;
