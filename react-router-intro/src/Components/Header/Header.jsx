import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <h2>This is Nav Menu</h2>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </nav>
    );
};

export default Header;