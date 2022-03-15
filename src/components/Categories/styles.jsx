import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOURS, TRANSITIONS } from '../../stylesConstants';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
  overflow-x: auto;

  padding: 2rem 1rem;
`;

export const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: ${COLOURS.text};
  letter-spacing: 2px;
  text-decoration: none;

  h3 {
    font-weight: 400;
  }

  svg {
    font-size: 6rem;
    color: ${props => props.color || COLOURS.iconsCategory};
    transition: color ${TRANSITIONS.fast};
  }

  &:hover {
    svg {
      color: ${props => (props.color ? '#c88206' : '#fff')};
    }
  }
`;
