import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_POPULAR } from '../../config';

import Card from '../../components/shared/Card';

function Home() {
  const [populars, setPopulars] = useState([]);

  const getPopulars = async () => {
    let localData = null;

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
        localStorage.setItem(LOCAL_STORAGE_KEY_POPULAR, JSON.stringify(films));
        setPopulars(films);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    getPopulars();
  }, []);

  return (
    <FilmBox>
      <h2>Popular films now</h2>
      <Grid>
        {populars.map(film => (
          <Card
            id={film.id}
            title={film.title}
            image={film.image}
            key={film.id}
          />
        ))}
      </Grid>
    </FilmBox>
  );
}

export default Home;
