import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_ROMANCE } from '../../config';

import Card from '../../components/shared/Card';

function Romance() {
  const [romanceFilms, setRomanceFilms] = useState([]);

  const getRomanceFilms = async () => {
    let localData = null;

    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY_ROMANCE)))
      setRomanceFilms(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=tv_movie,tv_series&user_rating=8.0,&genres=romance`
        );
        //   );
        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.results.slice(0, LIMIT);
        localStorage.setItem(LOCAL_STORAGE_KEY_ROMANCE, JSON.stringify(films));
        setRomanceFilms(films);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    getRomanceFilms();
  }, []);

  return (
    <FilmBox>
      <h2>Popular Romance films and series now</h2>
      <Grid>
        {romanceFilms.map(film => (
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

export default Romance;
