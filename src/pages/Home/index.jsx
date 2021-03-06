import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import {
  LIMIT,
  LOCAL_STORAGE_KEY_POPULAR,
  LOCAL_STORAGE_KEY_FAVS,
} from '../../config';

import Card from '../../components/shared/Card';
import Spinner from '../../components/shared/Spinner';

function Home() {
  const [populars, setPopulars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState(getFavourites());

  ///////////////////////////////

  function getFavourites() {
    let localData = localStorage.getItem(LOCAL_STORAGE_KEY_FAVS);
    return localData ? JSON.parse(localData) : [];
  }

  const addFavouriteHandler = film => {
    setFavourites([...favourites, film]);
    console.log(film);
  };

  const deleteFavouriteHandler = id => {
    const newFavs = favourites.filter(fav => fav.id !== id);
    setFavourites([...newFavs]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_FAVS, JSON.stringify(favourites));
  }, [favourites]);

  ///////////////////////////////
  const getPopulars = async () => {
    let localData = null;

    // If we want to store the results to prevent repetitive loadings
    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY_POPULAR)))
      setPopulars(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
        );
        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.items.slice(0, LIMIT);

        // If we want to store the results to prevent repetitive loadings. Doing this we prevent to reach the limit of 100 req per day.
        // UNCOMMENT THIS TO ALLOW LOCAL STORAGE
        // localStorage.setItem(LOCAL_STORAGE_KEY_POPULAR, JSON.stringify(films));

        setPopulars(films);
        setIsLoading(false);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    setIsLoading(true);
    getPopulars();
  }, []);

  return (
    <FilmBox>
      <h2>Popular films now</h2>
      <Grid>
        {isLoading ? (
          <Spinner />
        ) : (
          populars.map(film => (
            <Card
              id={film.id}
              title={film.title}
              image={film.image}
              key={film.id}
              addFavouriteHandler={addFavouriteHandler}
              deleteFavouriteHandler={deleteFavouriteHandler}
              favourites={favourites}
            />
          ))
        )}
      </Grid>
    </FilmBox>
  );
}

export default Home;
