import { LOCAL_STORAGE_KEY_ACTION } from '../../config';

import ResultList from '../../components/shared/ResultList';

function Action() {
  return (
    <ResultList LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY_ACTION} genre={'action'} />
  );
}

export default Action;
