import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomButton } from "../../components/contact/stylesComponent";
import {
  StyledContainer,
  StyledGridItem,
  StyledImageBox,
  StyledImage,
  StyledButtonBox,
} from "./home.styles";

const Home = () => {
  return (
    <StyledContainer container>
      <StyledGridItem item xs={12} md={8} lg={6}>
        <StyledImageBox>
          <StyledImage src="/src/assets/images/DeltaHome.png" alt="Delta Grupo" />
        </StyledImageBox>

        <StyledButtonBox>
          <CustomButton
            variant="contained"
            endIcon={<SearchIcon />}
            component={Link}
            to="/search"
          >
            Busca por produto
          </CustomButton>

          <CustomButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/contact"
          >
            Fale com a gente
          </CustomButton>
        </StyledButtonBox>
      </StyledGridItem>
    </StyledContainer>
  );
};

export default Home;
