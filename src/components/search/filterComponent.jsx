import React, { useState } from "react";
import { MenuItem, Button, Grid } from "@mui/material";
import {
  InfoContainer,
  CustomInputLabel,
  CustomTextField,
  CustomSelect,
  CustomButton,
} from "./styleSearch";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FilterComponent = ({ filters, setLocalFilters, products }) => {
  const [localFilters, setLocal] = useState(filters);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocal({ ...localFilters, [name]: value });
  };

  const handleSearchClick = () => {
    setLocalFilters(localFilters);
  };

  return (
    <InfoContainer>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <CustomInputLabel>Pesquise por ID</CustomInputLabel>
          <CustomTextField
            fullWidth
            placeholder="Pesquise"
            variant="outlined"
            name="search"
            value={localFilters.search}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <CustomInputLabel>Produto</CustomInputLabel>
          <CustomSelect
            fullWidth
            name="product"
            value={localFilters.product}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem value="">Todos</MenuItem>
            {products.map((product, index) => (
              <MenuItem key={index} value={product.produto}>
                {product.produto}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <CustomInputLabel>Status</CustomInputLabel>
          <CustomSelect
            fullWidth
            name="status"
            value={localFilters.status}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Ativo">Ativo</MenuItem>
            <MenuItem value="Inativo">Inativo</MenuItem>
          </CustomSelect>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <CustomInputLabel>Vigência de</CustomInputLabel>
          <CustomTextField
            fullWidth
            type="date"
            name="startDate"
            value={localFilters.startDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <CustomInputLabel>Até</CustomInputLabel>
          <CustomTextField
            fullWidth
            type="date"
            name="endDate"
            value={localFilters.endDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={1}>
          <CustomButton
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ height: "100%" }}
            onClick={handleSearchClick}
          >
            <ArrowForwardIcon />
          </CustomButton>
        </Grid>
      </Grid>
    </InfoContainer>
  );
};

export default FilterComponent;
