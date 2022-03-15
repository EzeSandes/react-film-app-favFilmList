import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { SCard, TitleBox, FilmTitle } from './styles';

function Card({ image, title, id }) {
  return (
    <SCard>
      <Link to={`/${id}`}>
        <img src={image} alt={title} />
        <TitleBox>
          <FilmTitle>{title}</FilmTitle>
          {/* <FaHeart /> */}
          <FaRegHeart />
        </TitleBox>
      </Link>
    </SCard>
  );
}

export default Card;
