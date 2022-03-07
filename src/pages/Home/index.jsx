import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import mentorone from "../../resources/images/Mentor 1.png";
import mentortwo from "../../resources/images/Mentor 2.png";
import mentorthree from "../../resources/images/Mentor 3.png";
import workspace from "../../resources/images/Workspace.png";
import purpleworkspace from "../../resources/images/Rectangle 124.png";
import { RiBriefcaseLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-page row home-page-row">
                <div className="sidebar-component">
                    <Sidebar />
                </div>
                <div className="home-content">
                    <div className="username-card">
                        <h1 className="username">Hello, <span className="username-span">Alpha!</span></h1>
                        <p className="user-mail">alpha@gmail.com</p>
                    </div>
                    <div className="mentors-for-you">
                        <div className="text-row">
                            <p className="mentors-subheading-text">Mentors for you</p>
                            <Link to="/">See all</Link>
                        </div>
                        {/* <div className="mentor-cards"> */}
                        <div className="row">
                            <div className="image-card">
                                <img className="mentor-image" src={mentorone} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Sarah Agu</p>
                                    <p className="mentor-company">Toptal</p>
                                    <p className="mentor-role">
                                        <span><RiBriefcaseLine /></span>
                                        <span>Snr. Product Designer</span>
                                    </p>
                                    <p className="mentor-role">
                                        <span><FiMessageSquare /></span>
                                         <span>Job search, Career advice, Design</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="mentor-image" src={mentortwo} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Emily Okoye</p>
                                    <p className="mentor-company">Bloomberg</p>
                                    <p className="mentor-role">
                                        <span><RiBriefcaseLine /></span>
                                        <span>Visual Designer</span>
                                    </p>
                                    <p className="mentor-role">
                                        <span><FiMessageSquare /></span>
                                         <span>Job search, Career advice, Design</span>
                                    </p>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="mentor-image" src={mentorthree} alt="" />
                                <div className="mentor-info">
                                    <p className="mentor-name">Favour Urhiofe</p>
                                    <p className="mentor-company">Toptal</p>
                                    <p className="mentor-role">
                                        <span><RiBriefcaseLine /></span>
                                        <span>Snr. Product Designer</span>
                                    </p>
                                    <p className="mentor-role">
                                        <span><FiMessageSquare /></span>
                                         <span>Job search, Career advice, Design</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                    <div>
                        <div className="text-row">
                            <p className="mentors-subheading-text">Hot Topics</p>
                            <Link to="/">See all</Link>
                        </div>
                        <div className="row">
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={workspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Nov 23, 2021</p>
                                    <p className="mentor-company">This way is wrong about UI Design.</p>
                                    <p className="topic-title">A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={purpleworkspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Nov 23, 2021</p>
                                    <p className="mentor-company">This way is wrong about UI Design.</p>
                                    <p className="topic-title">A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={workspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Nov 23, 2021</p>
                                    <p className="mentor-company">This way is wrong about UI Design.</p>
                                    <p className="topic-title">A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-row">
                            <p className="mentors-subheading-text">Job board</p>
                            <Link to="/">See all</Link>
                        </div>
                        <div className="row">
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={workspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Palmpay</p>
                                    <p className="mentor-company">Junior Product Designer</p>
                                    <p className="topic-title"><b>Responsibilities:</b> to assist users in challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={purpleworkspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Cowrywise</p>
                                    <p className="mentor-company">Product Manager</p>
                                    <p className="topic-title"><b>Responsibilities:</b> to assist users in challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                            <div className="image-card hot-topic-card">
                                <img className="mentor-image" src={workspace} alt="" />
                                <div className="mentor-info">
                                    <p className="topic-date">Flutterwave</p>
                                    <p className="mentor-company">Software Developer</p>
                                    <p className="topic-title"><b>Responsibilities:</b> to assist users in challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.</p>
                                    <Link className="read-more" to="/">READ MORE </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Home;