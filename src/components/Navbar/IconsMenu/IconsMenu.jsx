import './iconsMenu.css';
import { NavLink } from 'react-router-dom';

const IconsMenu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <NavLink to="/" className='menu_item'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/productos" className='menu_item'>Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className='menu_item'>Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className='menu_item'>Nosotros</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default IconsMenu;