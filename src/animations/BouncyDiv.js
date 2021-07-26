import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const BounceInAnimation = keyframes`${bounceIn}`;

export const BounceInDiv = styled.div`
  animation: infinite 5s ${BounceInAnimation};
`;