import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { FavsContainer } from './styles';
import { LOCAL_STORAGE_KEY_FAVS } from '../../config';

import Card from '../../components/shared/Card';

function Favs() {
  const [favourites, setFavourites] = useState(getFavourites());
  const [error, setError] = useState(false);

  function getFavourites() {
    let localData = localStorage.getItem(LOCAL_STORAGE_KEY_FAVS);
    return localData ? JSON.parse(localData) : [];
  }

  const deleteFavouriteHandler = id => {
    const newFavs = favourites.filter(fav => fav.id !== id);
    setFavourites([...newFavs]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_FAVS, JSON.stringify(favourites));
    if (favourites.length === 0) setError(previousState => !previousState);
  }, [favourites]);

  return (
    <FilmBox>
      <h2>My personal favourites</h2>
      <Grid>
        {error ? (
          <FavsContainer>
            <p>No Favs for now.</p>
          </FavsContainer>
        ) : (
          favourites.map(film => (
            <Card
              id={film.id}
              title={film.title}
              image={film.image}
              key={film.id}
              favourites={favourites}
              deleteFavouriteHandler={deleteFavouriteHandler}
            />
          ))
        )}
      </Grid>
    </FilmBox>
  );
}

export default Favs;
