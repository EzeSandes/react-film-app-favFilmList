import { List, SLink } from './styles';
import { MdTheaterComedy } from 'react-icons/md';
import { GiPistolGun } from 'react-icons/gi';
import { BiGhost } from 'react-icons/bi';
import { FaHeart, FaStar } from 'react-icons/fa';
import { COLOURS } from '../../stylesConstants';

function Categories() {
  return (
    <List>
      <SLink to={'/favs'} color={COLOURS.favsCategory}>
        <FaStar />
        <h3>Favourites</h3>
      </SLink>
      <SLink to={'/comedy'}>
        <MdTheaterComedy />
        <h3>Comedy</h3>
      </SLink>
      <SLink to={'/action'}>
        <GiPistolGun />
        <h3>Action</h3>
      </SLink>
      <SLink to={'/horror'}>
        <BiGhost />
        <h3>Horror</h3>
      </SLink>
      <SLink to={'/romance'}>
        <FaHeart />
        <h3>Romance</h3>
      </SLink>
    </List>
  );
}

export default Categories;
