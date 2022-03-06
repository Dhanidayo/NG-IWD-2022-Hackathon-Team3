import { Link, NavLink } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";
import "./style.css";

const Header = () => {
    return (
        <header className="home-header">
            <div className="container--primary row">
                <Link className='logo nav__link' to="/">
                    AFRO-IN-TECH
                </Link>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li className="nav__item">
                            <NavLink className="nav__link" activeClassName="active" to="/">Learn</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" activeClassName="active" to="/">Forum</NavLink>
                        </li>
                    </ul>
                    <ul className="nav__list">
                        <li className="nav__item notification-icon">
                            <MdNotificationsNone />
                        </li>
                        <li className="nav__item">
                            <div className="dp-holder">B</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;