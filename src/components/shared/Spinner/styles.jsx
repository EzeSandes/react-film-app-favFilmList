import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
`;

export const SSpinner = styled.div`
  margin: 5rem auto;
  text-align: center;

  svg {
    font-size: 7rem;
    color: white;

    animation: ${rotate} 2s infinite linear;
  }
`;
