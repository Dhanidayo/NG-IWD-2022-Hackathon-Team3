import { Link } from "react-router-dom";
import "./style.css";

const Signup = () => {
    return (
        <div className="signup-page">
            {/* <div className="container--primary"> */}
                <div className="row">
                    <div className="signup-image-col">

                    </div>
                    <div className="signup-content-col">
                        <div className="content-container">
                            <h2 className="signup-title">Sign Up</h2>
                            <p className="signup-para">
                                Welcome to our community
                            </p>

                            <div className="input-fields">
                                <input type="text" name="email" id="email" className="text-field" placeholder="Email/Phone Number" />
                                <input type="text" name="password" id="password" className="text-field" placeholder="Password" />

                                <div className="btn-field">
                                    <button className="btn--primary text-field">
                                        Create Account
                                    </button>
                                </div>
                            </div>

                            <p className="signup-para-small">
                                By creating an account, you agree to the <span className="para-accent-small">terms & conditions</span> of the <span className="para-accent-small">Privacy policy</span>
                            </p>

                            <p className="last-para">
                                Already have an account? <Link className="login-link" to="/login">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
 
export default Signup;