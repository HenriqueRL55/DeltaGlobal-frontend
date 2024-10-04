import styled from "styled-components";
import { InputLabel, TextField, Select, Button } from "@mui/material";

export const InfoContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 16px 0;
  height: auto;
  padding: 45px 30px;
  border: 1px solid #ebebeb;
  align-content: center;
  flex-wrap: wrap;
`;

export const CustomTableContainer = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  @media (max-width: 650px) {
    overflow: auto;
  }
`;

export const CustomTypography = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  padding: 10px;
  text-align: left;
  margin-bottom: 16px;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const CustomInputLabel = styled(InputLabel)`
  display: flex;
  font-size: 13px;
  font-weight: medium;
  color: #545454;
  text-align: left;
`;

export const CustomTextField = styled(TextField)`
  color: #adadad;
  font-size: 14px;
  font-weight: regular;
  background-color: #fff;
  text-align: left;
`;

export const CustomSelect = styled(Select)`
  color: #adadad;
  font-size: 14px;
  font-weight: regular;
  background-color: #fff;
  text-align: left;
`;

export const CustomButton = styled(Button)`
  display: flex;
  background-color: #0089bf !important;
  color: #fff !important;
  padding: 15px 28px !important;
  border-radius: 50px !important;
  width: 6rem !important;
  font-weight: semibold !important;
  align-self: flex-end;
`;
