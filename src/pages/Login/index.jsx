import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
    return (
        <div className="login-page">
            {/* <div className="container--primary"> */}
                <div className="row">
                    <div className="login-content-col">
                        <div className="content-container">
                            <h2 className="signup-title">Welcome</h2>
                            <p className="signup-para">
                                Login to your account
                            </p>

                            <div className="input-fields">
                                <input type="text" name="email" id="email" className="text-field" placeholder="Email/Phone Number" />
                                <input type="text" name="password" id="password" className="text-field" placeholder="Password" />

                                <div className="flex-checkbox">
                                    <div className="remember-check">
                                        <input type="checkbox" name="remember-me" id="remember-me"
                                        className="checkbox" />
                                        <p>Remember me</p>
                                    </div>
                                    <Link className="para-accent-small reset-link" to="/reset-password">
                                        Forgot password
                                    </Link>
                                </div>

                                <div className="btn-field">
                                    <button className="btn--primary text-field">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <p className="last-para">
                                No account yet? <Link className="login-link" to="/sign-up">Sign up</Link>
                            </p>
                        </div>
                    </div>
                    <div className="signup-image-col">

                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
 
export default Login;