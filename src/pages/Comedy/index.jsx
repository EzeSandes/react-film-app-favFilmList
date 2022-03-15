import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_COMEDY } from '../../config';

import Card from '../../components/shared/Card';

function Comedy() {
  const [comedies, setComedies] = useState([]);

  const getComedies = async () => {
    let localData = null;

    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY_COMEDY)))
      setComedies(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=tv_movie&user_rating=8.0,&genres=comedy`
        );

        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.results.slice(0, LIMIT);
        localStorage.setItem(LOCAL_STORAGE_KEY_COMEDY, JSON.stringify(films));
        setComedies(films);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    getComedies();
  }, []);

  return (
    <FilmBox>
      <h2>Popular Comedy films now</h2>
      <Grid>
        {comedies.map(film => (
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

export default Comedy;
