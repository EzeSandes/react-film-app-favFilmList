import { useState, useEffect } from 'react';
import { Grid, FilmBox } from '../../../sharedStyles';
import { LIMIT } from '../../../config';

import Card from '../Card';
import Spinner from '../Spinner';

function ResultList({ LOCAL_STORAGE_KEY, genre }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getResults = async () => {
    let localData = null;

    // If we want to store the results to prevent repetitive loadings
    if ((localData = localStorage.getItem(LOCAL_STORAGE_KEY)))
      setResults(JSON.parse(localData));
    else
      try {
        const res = await fetch(
          `https://imdb-api.com/API/AdvancedSearch/${
            process.env.REACT_APP_API_KEY
          }?title_type=tv_movie,tv_series&user_rating=8.0,&genres=${genre.toLowerCase()}`
        );
        if (!res.ok) throw new Error(`⛔Error⛔ --> ${res.status}`);

        const data = await res.json();
        const films = data.results.slice(0, LIMIT);

        // If we want to store the results to prevent repetitive loadings. Doing this we prevent to reach the limit of 100 req per day.
        // UNCOMMENT THIS TO ALLOW LOCAL STORAGE
        // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(films));

        setResults(films);
        setIsLoading(false);
      } catch (err) {
        console.log(err.messagge);
        console.log(err);
      }
  };

  useEffect(() => {
    setIsLoading(true);
    getResults();
  }, []);

  return (
    <FilmBox>
      <h2>
        Popular {genre[0].toUpperCase() + genre.slice(1)} films and series now
      </h2>
      <Grid>
        {isLoading ? (
          <Spinner />
        ) : (
          results.map(film => (
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

export default ResultList;
