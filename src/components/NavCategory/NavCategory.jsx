import './navCategory.css';
import { NavLink } from 'react-router-dom';

const NavCategory = () => {
    return (
        <nav className='categories'>
            <ul>
                <li>
                    <NavLink to="/productos" className='menu_item'>Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/category/placas" className='menu_item'>Placas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/techos" className='menu_item'>Techos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/escaleras" className='menu_item'>Escaleras</NavLink>
                </li>
                <li>
                    <NavLink to="/category/mesadas" className='menu_item'>Mesadas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/mesas" className='menu_item'>Mesas</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavCategory;