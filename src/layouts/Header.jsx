// Import dependencies
import { NavLink } from 'react-router-dom';

// Import assets
import logoWebp from '../assets/logo.webp';

// Import CSS module

/**
 * Header component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function Header() {
    return (
        <header className="header">
            <div className="identity">
                <NavLink className="navLink" to="/">
                    <img
                        src={logoWebp}
                        className="logo"
                        alt="Logo"
                        width="110"
                        height="110"
                    />
                </NavLink>
                <p className="appName">HRnet</p>
            </div>
            <nav className="nav">
                <ul>
                    <li className="link">
                        <NavLink className="navLink" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="navLink" to="/employee-list">
                            Employee list
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
