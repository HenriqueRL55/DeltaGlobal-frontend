// React
import React, { useState } from "react";

// Styled Components
import { MainContainer, CustomMainTypography } from "./searchPage.styles";

// Components
import FilterComponent from "../../components/search/filterComponent";
import ProductTable from "../../components/search/productTableComponent";

// Data
import productData from "../../data/productData";


const SearchPage = () => {
  const [filters, setFilters] = useState({
    search: "",
    product: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const setLocalFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <MainContainer>
      <CustomMainTypography>Busca</CustomMainTypography>
      <FilterComponent
        filters={filters}
        setLocalFilters={setLocalFilters}
        products={productData}
      />
      <ProductTable filters={filters} />
    </MainContainer>
  );
};

export default SearchPage;
