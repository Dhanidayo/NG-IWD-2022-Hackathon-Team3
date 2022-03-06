import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../components/stateprovider";
import { toast } from 'react-toastify';
import "./style.css";


const Login = () => {
    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const loginUser = ({ email, password }) => {
        let user = null;

        //first check if a user exists
        if (localStorage.getItem(email)) {
            user = JSON.parse(localStorage.getItem(email));
        }

        if (!user) {
            return toast.error("An account for this email does not exist");
        }
        const userData = user;
        console.log(userData);

        if (password !== userData.password) {
            return toast.error("Invalid credentials");
        }
        
        toast.success("Login Successful for " + email);

        context.dispatch({
            type: 'LOGIN',
            payload: {
                isLoggedIn: true,
                userEmail: userData.email,
            },
        });
        navigate('/home');
    }


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

                            <form onSubmit={handleSubmit(loginUser)} className="input-fields">
                                <input type="text" name="email" id="email" className="text-field" placeholder="Email" required {...register('email')} />
                                <input type="text" name="password" id="password" className="text-field" placeholder="Password" required {...register('password')} />

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
                                    <button type="submit" className="btn--primary text-field">
                                        Login
                                    </button>
                                </div>
                            </form>

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