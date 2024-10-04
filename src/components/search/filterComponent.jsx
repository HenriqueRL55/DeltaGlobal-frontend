// React
import React, { useState } from "react";

// Material UI
import { Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Components
import { InputField } from "../common/InputField";
import SelectField from "../common/SelectField";

// Styled Components
import { InfoContainer, CustomButton } from "./styleSearch";

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
          <InputField
            label="Pesquise por ID"
            name="search"
            value={localFilters.search}
            onChange={handleInputChange}
            placeholder="Pesquise"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <SelectField
            label="Produto"
            name="product"
            value={localFilters.product}
            onChange={handleInputChange}
            options={products.map(product => ({ value: product.produto, label: product.produto }))}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <SelectField
            label="Status"
            name="status"
            value={localFilters.status}
            onChange={handleInputChange}
            options={[
              { value: "Ativo", label: "Ativo" },
              { value: "Inativo", label: "Inativo" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <InputField
            label="Vigência de"
            name="startDate"
            value={localFilters.startDate}
            onChange={handleInputChange}
            type="date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <InputField
            label="Até"
            name="endDate"
            value={localFilters.endDate}
            onChange={handleInputChange}
            type="date"
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
