import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem 3rem;
  margin-top: 5rem;
  list-style: none;
`;

export const FilmBox = styled.div`
  padding: 3rem 1rem 1rem 1rem;

  h2 {
    font-size: 4rem;
    letter-spacing: 2px;
  }
`;
