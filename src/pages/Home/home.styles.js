import styled from 'styled-components';
import { Grid, Box } from "@mui/material";

export const StyledContainer = styled(Grid)({
  height: "100vh",
  backgroundImage: "url(/src/assets/images/BackgroundHome.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const StyledGridItem = styled(Grid)({
  textAlign: "center",
  marginTop: "20px",
});

export const StyledImageBox = styled(Box)({
  margin: "40px",
});

export const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

export const StyledButtonBox = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",
});
