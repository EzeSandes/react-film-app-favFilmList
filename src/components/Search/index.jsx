import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SectionSearch, FormStyle, SearchButton } from './styles';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate('/search/' + input);
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
