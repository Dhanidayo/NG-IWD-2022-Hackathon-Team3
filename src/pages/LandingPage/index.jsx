import DefaultLayout from "../../components/Layout";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <DefaultLayout>
            <div className="landing-page">
                <div className="container--primary">
                    <div className="banner-contents-wrapper">
                        <div className="banner-texts">
                            <h1 className="main-text">
                                Get Access to Life-changing Opportunities
                            </h1>
                            <p className="main-para">
                                Become a part of our community and get unlimited access to resources, mentors, and connect with other women like you who are changing the world.
                            </p>
                            <Link to="/">
                                <button className="btn--primary">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                        <div className="banner-image">

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
 
export default LandingPage;