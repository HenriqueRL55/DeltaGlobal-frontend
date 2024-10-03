import styled from "styled-components";
import { Dialog } from "@mui/material";

export const CustomDialog = styled(Dialog)`
  .MuiDialog-paper {
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    border-radius: 10px;
    width: 350px;
    margin: 25px;
    text-align: center;
  }
`;

export const CustomModalTypography = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: bold;
  color: #333333;
  padding: 10px;
  text-align: center;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.button`
  display: flex;
  width: 80%;
  padding: 16px 20px;
  border-radius: 50px;
  border: 1px solid #ebebeb;
  background-color: #00c1b4;
  color: white;
  cursor: pointer;
  font-size: 16px;
  justify-content: center;

  &:hover {
    background-color: #009688;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  width: 80%;
  padding: 16px 20px;
  border-radius: 50px;
  border: 1px solid #000;
  background-color: #fff;
  color: #333333;
  cursor: pointer;
  font-size: 16px;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;
