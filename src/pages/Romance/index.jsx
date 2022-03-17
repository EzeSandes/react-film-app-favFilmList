import { LOCAL_STORAGE_KEY_ROMANCE } from '../../config';
import ResultList from '../../components/shared/ResultList';

function Romance() {
  return (
    <ResultList
      LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY_ROMANCE}
      genre={'romance'}
    />
  );
}

export default Romance;
