import styled from 'styled-components';
import { COLOURS, TRANSITIONS } from '../../stylesConstants';

export const SectionSearch = styled.section`
  padding: 7.4rem 0 2rem 0;
`;

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${COLOURS.searchForm};
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1rem;

  input {
    background: inherit;
    border: none;
    outline: none;
    width: 100%;
    padding: 0.5rem;
    height: 4.2rem;
    font-size: 3.2rem;
    font-family: inherit;
    color: ${COLOURS.text};
  }
`;

export const SearchButton = styled.button`
  background-color: inherit;
  padding: 1rem;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: all ${TRANSITIONS.fast};

  svg {
    height: 3rem;
    width: auto;
  }

  &:hover {
    color: #adb5bd;
  }
`;
