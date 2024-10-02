import styled from "styled-components";
import {
  InputLabel,
  TextField,
  Select,
  OutlinedInput,
  Button,
} from "@mui/material";

export const InfoContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 16px 0;
  height: auto;
  padding: 45px 30px;
  border: 1px solid #ebebeb;
  align-content: center;
`;

export const CustomButton = styled(Button)`
  background-color: #00c1b4 !important;
  color: #fff !important;
  padding: 15px 40px !important;
  border-radius: 50px !important;
  width: 16rem !important;
  font-size: 16px !important;
  font-weight: semibold !important;
  text-transform: none !important;
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

export const CustomOutlinedInput = styled(OutlinedInput)`
  color: #adadad;
  font-size: 14px;
  font-weight: regular;
  background-color: #fff;
  text-align: left;
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
