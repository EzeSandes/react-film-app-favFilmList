import { Link } from 'react-router-dom';
import { SNav } from './styles';
import Logo from '../../logo.png';

function Nav() {
  return (
    <SNav>
      <Link to={'/'}>
        <img src={Logo} alt='Logo' />
      </Link>
      {/* LOGO */}
    </SNav>
  );
}

export default Nav;
