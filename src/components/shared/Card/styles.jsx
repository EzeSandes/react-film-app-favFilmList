import styled from 'styled-components';
import { COLOURS, TRANSITIONS } from '../../../stylesConstants';

export const SCard = styled.li`
  list-style: none;
  position: relative;
  border-radius: 11px;
  overflow: hidden;

  img {
    height: 40rem;
    width: 100%;
    transition: all ${TRANSITIONS.fast};
  }

  /* svg {
    position: absolute;
    right: 2%;
    bottom: 4%;
    font-size: 4rem;
    z-index: 10;
    color: ${COLOURS.favs};
  } */

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const TitleBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 80%);

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding: 0.5rem 1rem;

  svg {
    font-size: 4rem;
    color: ${COLOURS.favs};
    align-self: center;
  }
`;

export const FilmTitle = styled.h3`
  color: ${COLOURS.text};
  font-size: 2.4rem;
  letter-spacing: 1px;
`;
