import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../components/stateprovider";
import { toast } from 'react-toastify';
import "./style.css";

const Signup = () => {
    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();
    const context = useContext(AppContext);
    const navigate = useNavigate();

    function registerUser({ username, email, password, confirmpassword}) {
        if (password !== confirmpassword) {
            return toast.error("Passwords don't match");
        }

        let userFound = localStorage.getItem(email);
        console.log(userFound);
        if (userFound) {
            return toast.success("This user has already been registered, please log in to continue.");
        }
        //else create a new user and save to local storage
        const newUser = {
            username: username,
            email: email,
            password: password,
            userId: Date.now(),
        }
        //save newuser to local storage
        localStorage.setItem(email, JSON.stringify(newUser));
        toast.success("Your account has been created successfully! Please login");

        context.dispatch({
            type: 'SIGNUP',
            payload: {
                userId: newUser.userId,
                userEmail: newUser.email,
            },
        });
        navigate('/login');
    }


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

                            <form onSubmit={handleSubmit(registerUser)} className="input-fields">
                                <input type="text" name="username" id="username" className="text-field" placeholder="Username" required {...register('username')} />
                                {errors.username && <p className="error-message">Username is required</p>}
                                <input type="text" name="email" id="email" className="text-field" placeholder="Email" required {...register('email')} />
                                {errors.email && <p className="error-message">Email is required</p>}
                                <input type="text" name="password" id="password" className="text-field" placeholder="Password" required {...register('password')} />
                                <input type="text" name="confirmpassword" id="confirmpassword" className="text-field" placeholder="Confirm Password" required {...register('confirmpassword')} />
                                <div className="btn-field">
                                    <button type="submit" className="btn--primary text-field">
                                        Create Account
                                    </button>
                                </div>
                            </form>

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