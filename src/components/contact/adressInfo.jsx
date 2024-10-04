import React, { useState, useEffect } from "react";
import { Grid, MenuItem, CircularProgress } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputMask from "react-input-mask";
import {
  InfoContainer,
  CustomInputLabel,
  CustomTypography,
  CustomSelect,
  CustomOutlinedInput,
} from "./stylesComponent";
import { brazilStates } from "../../data/clientData";
import useAddressByCep from "../../hooks/useAdressByCep";

const AddressInfo = ({ setFormData }) => {
  const [cep, setCep] = useState("");
  const { address, fetchAddress, loading, error } = useAddressByCep();
  const [localAddress, setLocalAddress] = useState({
    address: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setLocalAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleCepChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setCep(value);
    if (value.length === 8) {
      fetchAddress(value);
    }
  };

  const handleCepPaste = (e) => {
    const pastedValue = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (pastedValue.length === 8) {
      setCep(pastedValue);
      fetchAddress(pastedValue);
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (address) {
      handleInputChange("address", address.logradouro || "");
      handleInputChange("neighborhood", address.bairro || "");
      handleInputChange("city", address.localidade || "");
      handleInputChange("state", address.uf || "");
    }
  }, [address]);

  return (
    <InfoContainer>
      <CustomTypography>Endereço</CustomTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <CustomInputLabel>CEP</CustomInputLabel>
          <InputMask
            mask="99999-999"
            value={cep}
            onChange={handleCepChange}
            onPaste={handleCepPaste}
          >
            {() => <CustomOutlinedInput placeholder="00000-000" fullWidth />}
          </InputMask>
          {loading && <CircularProgress size={24} />}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Grid>

        <Grid item xs={12} md={6}>
          <CustomInputLabel>Endereço</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="Rua Olinda"
            fullWidth
            value={localAddress.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={1.5}>
          <CustomInputLabel>Número</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="140"
            fullWidth
            onChange={(e) => handleInputChange("number", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={2.5}>
          <CustomInputLabel>Complemento</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="5º Andar"
            fullWidth
            onChange={(e) => handleInputChange("complement", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomInputLabel>Bairro</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="São Geraldo"
            fullWidth
            value={localAddress.neighborhood}
            onChange={(e) => handleInputChange("neighborhood", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomInputLabel>Cidade</CustomInputLabel>
          <CustomOutlinedInput
            placeholder="Porto Alegre"
            fullWidth
            value={localAddress.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
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
            fullWidth
            value={localAddress.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
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
