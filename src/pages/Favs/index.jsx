import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { FavsContainer } from './styles';
import { LOCAL_STORAGE_KEY_FAVS } from '../../config';

import Card from '../../components/shared/Card';

function Favs() {
  const [favourites, setFavourites] = useState([]);
  const [error, setError] = useState(false);

  const getFavourites = () => {
    let data = null;

    if ((data = localStorage.getItem(LOCAL_STORAGE_KEY_FAVS)))
      setFavourites(JSON.parse(data));
    else setError(previousState => !previousState);
  };

  useEffect(() => {
    getFavourites();
  }, []);

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
            />
          ))
        )}
      </Grid>
    </FilmBox>
  );
}

export default Favs;
