import { Routes, Route, useLocation } from 'react-router-dom';

// COMPONENTS
import Home from '../Home';
import Favs from '../Favs';
import Comedy from '../Comedy';
import Action from '../Action';
import Horror from '../Horror';
import Romance from '../Romance';
import Searched from '../Searched';

const Pages = () => {
  let location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/favs' element={<Favs />} />
      <Route path='/comedy' element={<Comedy />} />
      <Route path='/action' element={<Action />} />
      <Route path='/horror' element={<Horror />} />
      <Route path='/romance' element={<Romance />} />
      <Route path='/search/:search' element={<Searched />} />
    </Routes>
  );
};

export default Pages;
