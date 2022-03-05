import DefaultLayout from "../../components/Layout";
import { Link } from "react-router-dom";
import bannerimg from "../../resources/images/Hero Image.png";
import mentorsillustration from "../../resources/illustration-images/Group 185.png";
import noteillustration from "../../resources/illustration-images/Group 184.png";
import briefcaseillustration from "../../resources/illustration-images/Group 211.png";
import "./style.css";

const LandingPage = () => {
    return (
        <DefaultLayout>
            <div className="landing-page">
                <section id="banner">
                    <div className="container--primary">
                        <div className="banner-contents-wrapper row">
                            <div className="banner-texts">
                                <h1 className="main-text">
                                    Get Access to<br />
                                    Life-changing<br /> Opportunities
                                </h1>
                                <p className="main-para body-text">
                                    Become a part of our community and get unlimited <br/> access to resources, mentors, and connect with <br /> other women like you who are changing the world.
                                </p>
                                <Link to="/">
                                    <button className=" btn btn--primary">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <div className="banner-image">
                                <img className="hero-image" src={bannerimg }alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits-section">
                    <div className="container--primary">
                        <h2 className="sub-heading">
                            What our members benefit
                        </h2>
                        <div className="cards-container">
                            <div className="flex-cards">
                                <div className="card">
                                    <img className="illustration-image" src={mentorsillustration} alt=""  />
                                    <p className="card-title">
                                        Connect to career mentors
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                                <div className="card">
                                    <img className="illustration-image"  src={mentorsillustration} alt=""  />
                                    <p className="card-title">
                                        Working with other techsters
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-cards">
                                <div className="card">
                                    <img className="illustration-image"  src={noteillustration} alt=""  />
                                    <p className="card-title">
                                        Unlimited resources
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                                <div className="card">
                                    <img className="illustration-image"  src={noteillustration} alt=""  />
                                    <p className="card-title">
                                        Weekly trainings and projects
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-cards">
                                <div className="card">
                                    <img className="illustration-image"  src={briefcaseillustration} alt=""  />
                                    <p className="card-title">
                                        Job Opportunities and Career Roadmaps
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                                <div className="card">
                                    <img className="illustration-image"  src={briefcaseillustration} alt=""  />
                                    <p className="card-title">
                                        Scholarship and Internships
                                    </p>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}
 
export default LandingPage;