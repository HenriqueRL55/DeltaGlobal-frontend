import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  margin: 25px;
  border-radius: 10px;
  width: 480px;
  max-height: 70vh;
  max-width: 90%;
  text-align: center;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 40px 20px;
  text-align: left;
  word-break: break-word; 
  max-width: 100%; 

  @media (max-width: 900px) {
    max-height: 200px;
    overflow-y: auto;
  }
`;

export const TitleField = styled.div`
  font-size: 13px;
  color: #565656;
  font-weight: medium;
  word-break: break-word; 
  max-width: 100%;
`;

export const InfoField = styled.div`
  font-size: 13px;
  color: #565656;
  font-weight: regular;
  word-break: break-word; 
  max-width: 100%; 
  overflow-y: auto;
  max-height: 50px;
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
