import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_ACTION } from '../../config';

import Card from '../../components/shared/Card';

function Action() {
  const [actionsFilms, setActionsFilms] = useState([]);

  const getActionsFilms = async () => {
    let localData = null;

    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY_ACTION)))
      setActionsFilms(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=tv_movie&user_rating=8.0,&genres=action`
        );
        //   );
        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.results.slice(0, LIMIT);
        localStorage.setItem(LOCAL_STORAGE_KEY_ACTION, JSON.stringify(films));
        setActionsFilms(films);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    getActionsFilms();
  }, []);

  return (
    <FilmBox>
      <h2>Popular Action films now</h2>
      <Grid>
        {actionsFilms.map(film => (
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

export default Action;
