import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

const FlipInYAnimation = keyframes`${flipInY}`;

export const FlipInYDiv = styled.div`
  animation: infinite 5s ${FlipInYAnimation};
`;