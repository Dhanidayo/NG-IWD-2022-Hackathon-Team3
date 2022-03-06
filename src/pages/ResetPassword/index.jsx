import "./style.css";

const ResetPassword = () => {
    return (
        <div className="reset-page">
            {/* <div className="container--primary"> */}
                <div className="row">
                    <div className="reset-content-col">
                        <div className="content-container">
                            <h2 className="signup-title">Reset Password</h2>
                            <p className="signup-para">
                                Reset your password
                            </p>

                            <div className="input-fields">
                                <input type="text" name="new-password" id="password" className="text-field" placeholder="New Password" />
                                <input type="text" name="confirm-password" id="password" className="text-field" placeholder="Confirm Password" />

                                <div className="btn-field">
                                    <button className="btn--primary text-field">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reset-image-col">

                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
 
export default ResetPassword;