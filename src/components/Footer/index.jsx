import { Link } from "react-router-dom";
import FontAwesome from "react-icons/fa";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <div className="container--primary">
                <div className="row flex-footer">
                    <div className="row">
                        <div className="flex-footer-col">
                            <h3>Membership</h3>
                            <ul className="flex-footer-ul-left">
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Become a member</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Awards</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Celebrate her</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Start a cell</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Find a cell</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-footer-col">
                            <h3>Get Involved</h3>
                            <ul className="flex-footer-ul-left">
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Partner with us</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Donate</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Volunteer</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-footer-col">
                            <h3>About Us</h3>
                            <ul className="flex-footer-ul-left">
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Who we are</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Terms of Service</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Privacy Policy</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">FAQs</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Get Started</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-footer-col">
                            <h3>Resources</h3>
                            <ul className="flex-footer-ul-left">
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Blog</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Media</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Mentors</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/" className="footer-link">Security</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-footer-col">
                        <h3>Contact Us</h3>
                        <ul className="flex-footer-ul-left">
                            <li className="footer-list-item">
                                support@girlsintech.com
                            </li>
                            <li className="footer-list-item">
                                08000000786
                            </li>
                        </ul>
                        <ul className="sm-icon flex-footer-ul-left">
                            <li className="footer-list-item">
                                <FaFacebook />
                            </li>
                            <li className="footer-list-item">
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="copyright">
                        Copyright 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;