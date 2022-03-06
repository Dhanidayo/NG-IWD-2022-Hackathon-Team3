import { Link, NavLink } from 'react-router-dom';
import "./style.css";
import { FaCaretDown } from 'react-icons/fa';

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
                            <NavLink className="nav__link" to="/about">Podcast</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/login">Job Board</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">Donate</NavLink>
                        </li>
                    </ul>
                    <ul className="nav__list nav__list--secondary">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">English 
                                <span className="caret-icon">
                                    <FaCaretDown />
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/login">Login</NavLink>
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