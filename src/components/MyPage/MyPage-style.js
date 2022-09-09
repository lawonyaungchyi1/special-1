import { css, keyframes } from "styled-components";
import styled from "styled-components";

const breatheAnimation = keyframes`
 0% { right : -130px }
 100% { right : 0px }
`;

export const Container = {
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "auto",
  top: "20%",
};

export const MessageBox = styled.div`
  width: 50%;
  word-wrap: break-word;
  position: absolute;
  top: 16%;
  right: 0;
  border: 3px solid #ffd166;
  padding: 6px;
  border-radius: 10px 10px 2px 2px;
  color: #011627;
  font-weight: medium;
  box-shadow: 8px 0 6px 4px #f2e8cf;
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  /* animation-iteration-count: infinite; */
`;
