import { SectionSearch, FormStyle, SearchButton } from './styles';
import { FaSearch } from 'react-icons/fa';

import { useState } from 'react';

function Search() {
  const [input, setInput] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <SectionSearch>
      <FormStyle onSubmit={e => submitHandler(e)}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search...'
        />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </FormStyle>
    </SectionSearch>
  );
}

export default Search;
