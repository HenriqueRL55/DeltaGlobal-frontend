import React, { useState } from "react";
import { MainContainer, CustomMainTypography } from "./searchPage.styles";
import FilterComponent from "../../components/search/filterComponent";
import ProductTable from "../../components/search/productTableComponent";
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
