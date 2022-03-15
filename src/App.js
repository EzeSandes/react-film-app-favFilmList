// COMPONENTS
import Nav from './components/Nav';
import Search from './components/Search';
import Categories from './components/Categories';
import Pages from './pages/Pages';

import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Nav />
      <Search />
      <Categories />
      <Pages />
    </Container>
  );
}

const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  /* background: #fff; */
  border-right: 1px solid red;
  border-left: 1px solid red;
`;

export default App;
