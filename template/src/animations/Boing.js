import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const boing = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default styled(BaseAnimation)`
  animation-name: ${boing};
`;
