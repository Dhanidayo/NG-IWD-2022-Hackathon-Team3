import { Link, NavLink } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
    return (
        <header>
            <div className="container--primary row">
                <Link className='logo nav__link' to="/">
                    GIRLS-IN-TECH
                </Link>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/login">Contact Us</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">Donate</NavLink>
                        </li>
                    </ul>
                    <ul className="nav__list nav__list--secondary">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">English</NavLink>
                        </li>
                        <Link to="/sign-up">
                            <button className="btn btn--primary">
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