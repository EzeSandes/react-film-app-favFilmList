import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_HORROR } from '../../config';

import Card from '../../components/shared/Card';
import Spinner from '../../components/shared/Spinner';

function Horror() {
  const [horrorFilms, setHorrorFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHorrorFilms = async () => {
    let localData = null;

    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY_HORROR)))
      setHorrorFilms(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=tv_movie,tv_series&user_rating=8.0,&genres=horror`
        );
        //   );
        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.results.slice(0, LIMIT);

        /*
        // If we want to store the results to prevent repetitive loadings. Doing this we prevent to reach the limit of 100 req per day. 
        // UNCOMMENT THIS TO ALLOW LOCAL STORAGE
        
        localStorage.setItem(LOCAL_STORAGE_KEY_HORROR, JSON.stringify(films));
        */
        setHorrorFilms(films);
        setIsLoading(false);
      } catch (err) {
        console.log(err.messagge);
      }
  };

  useEffect(() => {
    setIsLoading(true);
    getHorrorFilms();
  }, []);

  return (
    <FilmBox>
      <h2>Popular Horror films and series now</h2>
      <Grid>
        {isLoading ? (
          <Spinner />
        ) : (
          horrorFilms.map(film => (
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

export default Horror;
