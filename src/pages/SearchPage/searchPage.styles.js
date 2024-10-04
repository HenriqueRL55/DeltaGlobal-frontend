//Styled Components
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 150px;
  @media (max-width: 1100px) {
    margin: 110px 50px;
  }
`;

export const CustomMainTypography = styled.div`
  display: flex;
  font-size: 22px;
  line-height: auto;
  font-weight: bold;
  color: #333333;
  justify-content: start;
  text-align: left;
  margin-bottom: 16px;
`;
