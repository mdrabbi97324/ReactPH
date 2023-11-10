import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <h2>This is Nav Menu</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
        </nav>
    );
};

export default Header;