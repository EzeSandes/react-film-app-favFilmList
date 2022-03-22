import { useParams } from 'react-router-dom';

import ResultList from '../../components/shared/ResultList';

const Searched = () => {
  const { search } = useParams();

  return (
    <ResultList
      url={`https://imdb-api.com/en/API/SearchTitle/k_mw0ziu3i/${search}`}
      limit={false}
    />
  );
};

export default Searched;
