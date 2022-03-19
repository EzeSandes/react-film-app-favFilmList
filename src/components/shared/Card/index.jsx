import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { SCard, TitleBox, FilmTitle } from './styles';

function Card({
  image,
  title,
  id,
  addFavouriteHandler,
  deleteFavouriteHandler,
  favourites,
}) {
  return (
    <SCard>
      <Link to={`/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <TitleBox>
        <FilmTitle>{title}</FilmTitle>
        {favourites.find(fav => fav.id === id) ? (
          <FaHeart onClick={() => deleteFavouriteHandler(id)} />
        ) : (
          <FaRegHeart
            onClick={() => addFavouriteHandler({ id, title, image })}
          />
        )}
      </TitleBox>
    </SCard>
  );
}

export default Card;
