import './navbar.css';
import { Link } from 'react-router-dom';
import logoWhite from '../../img/logoWhite.png';
import IconsMenu from './IconsMenu/IconsMenu';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return <header className='navBar'>
        <Link to="/"> <img src={logoWhite} alt="logo" className='logo'/> </Link>
        <IconsMenu />
        <Link to="/cart">
            <CartWidget />
        </Link>
    </header>
};

export default Navbar;