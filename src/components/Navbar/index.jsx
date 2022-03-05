import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container--primary">
                <Link to="/">
                    LOGO-HERE
                </Link>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li className="nav__item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/login">Contact Us</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/">Donate</NavLink>
                        </li>
                    </ul>
                    <ul className="nav__list nav__list--secondary">
                        <li className="nav__item">
                            <NavLink to="/">English</NavLink>
                        </li>
                        <Link to="/sign-up">
                            <button className="btn--primary">
                                Get Started
                            </button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;