import { LOCAL_STORAGE_KEY_COMEDY } from '../../config';
import ResultList from '../../components/shared/ResultList';

function Comedy() {
  return (
    <ResultList LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY_COMEDY} genre={'comedy'} />
  );
}

export default Comedy;
