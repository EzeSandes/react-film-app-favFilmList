import { LOCAL_STORAGE_KEY_HORROR } from '../../config';
import ResultList from '../../components/shared/ResultList';

function Horror() {
  return (
    <ResultList LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY_HORROR} genre={'horror'} />
  );
}

export default Horror;
