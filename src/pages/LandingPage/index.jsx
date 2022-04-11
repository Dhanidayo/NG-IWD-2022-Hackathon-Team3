import DefaultLayout from "../../components/Layout";
import { Link } from "react-router-dom";
import bannerimg from "../../resources/images/Hero Image.png";
import mentorsillustration from "../../resources/illustration-images/Group 185.png";
import noteillustration from "../../resources/illustration-images/Group 184.png";
import briefcaseillustration from "../../resources/illustration-images/Group 211.png";
import groupimage from "../../resources/images/Group picture.png";
import "./style.css";
import partnershipimage from "../../resources/images/Partnership 1.png";
import mentorshipimage from "../../resources/images/Mentorship 1.png";
import mentorone from "../../resources/images/Mentor 1.png";
import mentortwo from "../../resources/images/Mentor 2.png";
import mentorthree from "../../resources/images/Mentor 3.png";
import mentorfour from "../../resources/images/Mentor 4.png";
import mentorfive from "../../resources/images/Mentor 5.png";
import { FaArrowRight } from "react-icons/fa";

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
                                    Become a part of our community and get unlimited access to resources, mentors, and connect with  other women like you who are changing the world.
                                </p>
                                {/* <p className="main-para-d-none body-text">
                                    Become a part of our community and get unlimited access to resources, mentors, and connect with other women like you who are changing the world.
                                </p> */}
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
                        <div className="benefits-section-wrapper">
                            <h2 className="sub-heading">
                                What our members benefit
                            </h2>
                            <div className="cards-container">
                                <div className="flex-cards flex-end-card">
                                    <div className="card">
                                        <img className="illustration-image" src={mentorsillustration} alt=""  />
                                        <p className="card-title">
                                            Connect to career <br /> mentors
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <img className="illustration-image"  src={mentorsillustration} alt=""  />
                                        <p className="card-title">
                                            Working with <br /> other techsters
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-cards">
                                    <div className="card">
                                        <img className="illustration-image"  src={noteillustration} alt=""  />
                                        <p className="card-title">
                                            Unlimited <br /> resources
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <img className="illustration-image"  src={noteillustration} alt=""  />
                                        <p className="card-title">
                                            Weekly trainings <br /> and projects
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-cards flex-end-card">
                                    <div className="card">
                                        <img className="illustration-image"  src={briefcaseillustration} alt=""  />
                                        <p className="card-title">
                                            Job Opportunities <br /> and Career <br /> Roadmaps
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <img className="illustration-image"  src={briefcaseillustration} alt=""  />
                                        <p className="card-title">
                                            Scholarship and <br /> Internships
                                        </p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora officiis mollitia ullam fugiat dolores.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="events-section">
                    <div className="container--primary">
                        <div className="row">
                            <div className="section-content">
                                <h2 className="sub-heading sub-heading--left">
                                    Attend an event
                                </h2>
                                <p className="body-text events">
                                    Participate in any of our online or offline events and initiatives including bootcamps, Fireside chats,
                                    webinars, Mentorship programs and several more!
                                </p>
                                <Link className="events-button" to="/">
                                    <button className="btn btn--primary">
                                        View Upcoming Events
                                    </button>
                                </Link>
                            </div>
                            <div className="image-col">
                                <img src={groupimage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="partner-section">
                    <div className="container--primary">
                        <div className="row">
                            <div>
                                <img className="partner-image" src={partnershipimage} alt="" />
                            </div>
                            <div className="section-content partner-content">
                                <h2 className="sub-heading sub-heading--left">Partner with us</h2>
                                <p className="body-text">
                                    Be a sponsor for our next event via a donation or partner with our organization to reach more women in tech across Africa.
                                </p>
                                <div className="flex-btns">
                                    <Link to="/">
                                        <button className="btn btn--primary">
                                            Be a partner
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button className="btn btn--secondary">
                                            Be a Donor
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="apply-section">
                    <div className="container--primary">
                        <div className="row apply-section-contents">
                            <div className="section-content">
                                <h2 className="sub-heading sub-heading--left sub-heading--yellow">
                                    Apply to become a <br /> mentor
                                </h2>
                                <p className="body-text body-text-white">
                                    Be a sponsor for our next event via a donation or partner with our organisation to reach more women in tech across Africa.
                                </p>
                                <Link to="/">
                                    <button className="btn btn--primary__white">
                                        Apply
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <img src={mentorshipimage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mentors-section">
                    <div className="container--primary">
                        <h2 className="sub-heading sub-heading__black">
                            Meet our mentors
                        </h2>
                        <div className="row">
                            <div className="image-card">
                                <img className="mentor-image" src={mentorone} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Hannah Olaniyi</p>
                                    <p className="mentor-title">
                                        Product Designer, <span className="sub-heading--yellow">Google</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="mentor-image" src={mentortwo} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Rahmot Afolabi</p>
                                    <p className="mentor-title">
                                        Product Manager, <span className="sub-heading--yellow">Microsoft</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="mentor-image" src={mentorthree} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Favour Urhiofe</p>
                                    <p className="mentor-title">
                                        Product Designer, <span className="sub-heading--yellow">Tesla</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="image-card">
                                <img className="mentor-image" src={mentorfour} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Sarah Adebesin</p>
                                    <p className="mentor-title">
                                        Software Developer, <span className="sub-heading--yellow">Amazon</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="mentor-image" src={mentorfive} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Favour Ezichi</p>
                                    <p className="mentor-title">
                                        Software Developer, <span className="sub-heading--yellow">Andela</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card image-card--none">
                                <Link to="/">
                                    <button className="btn btn--primary">
                                        Explore <span className="arrow-icon"><FaArrowRight /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="feedback-section">
                    <div className="container--primary">
                        <div className="feedback-section-content row">
                            <div className="feedback-hero-text">
                                <h2 className="sub-heading sub-heading--left">
                                    What our members are saying
                                </h2>
                                <p className="small-text">Get inspired by these stories </p>
                            </div>
                            <div className="feedback-cards-wrapper">
                                <div className="align-feedback-card">
                                    <div className="feedback-card feedback-card--primary">
                                        <p className="quote-mark">"</p>
                                        <div>
                                            <p className="body-text-thin feedback-card-text">
                                                This program is mind blowing and the effort put into ensuring that newbies get better and gain clarity in their chosen career path is quite commendable. In just six months, I have grown so much. I recommend this to as many women as possible.
                                            </p>
                                            <p className="testifier-name">Sarah Adebesin</p>
                                            <p className="testifier-role">Software Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="feedback-card feedback-card--secondary">
                                        <p className="quote-mark">"</p>
                                        <div>
                                            <p className="body-text-thin feedback-card-text">
                                               The mentorship program was the start of my tech journey and I'm better for it. I recently got a job with a leading company in Africa and that happened because someone shared the recruitment link on the opportunities/job page.
                                            </p>
                                            <p className="testifier-name">Rahmot Afolabi</p>
                                            <p className="testifier-role">Product Manager</p>
                                        </div>
                                    </div>
                                    <div className="feedback-card feedback-card--black">
                                        <p className="quote-mark">"</p>
                                        <div>
                                            <p className="body-text-thin feedback-card-text">
                                                Being in a community of other women like me helped me realise that I'm not alone in my tech journey.
                                            </p>
                                            <p className="testifier-name">Favour Ezichi</p>
                                            <p className="testifier-role">Data Scientist</p>
                                        </div>
                                    </div>
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