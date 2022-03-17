import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../sharedStyles';
import { LIMIT, LOCAL_STORAGE_KEY_COMEDY } from '../../config';

import Card from '../../components/shared/Card';
import Spinner from '../../components/shared/Spinner';

function Comedy() {
  const [comedies, setComedies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getComedies = async () => {
    let localData = null;

    // If we want to store the results to prevent repetitive loadings
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

        /*
        // If we want to store the results to prevent repetitive loadings. Doing this we prevent to reach the limit of 100 req per day. 
        // UNCOMMENT THIS TO ALLOW LOCAL STORAGE
        
        localStorage.setItem(LOCAL_STORAGE_KEY_COMEDY, JSON.stringify(films));
        */

        setComedies(films);
        setIsLoading(false);
      } catch (err) {
        console.log('⛔⛔⛔⛔: ' + err.message);
      }
  };

  useEffect(() => {
    setIsLoading(true);
    getComedies();
  }, []);

  return (
    <FilmBox>
      <h2>Popular Comedy films now</h2>
      <Grid>
        {isLoading ? (
          <Spinner />
        ) : (
          comedies.map(film => (
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

export default Comedy;
