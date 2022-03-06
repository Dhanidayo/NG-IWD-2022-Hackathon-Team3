import DefaultLayout from "../../components/Layout";
import { useState, useContext } from "react";
// import useFetch from '../../Hooks/useFetch';
import BlogList from '../../components/BlogList';
import { AppContext } from "../../components/stateprovider";

import { Link } from "react-router-dom";
import { FaMedium } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import bannerimg from "../../resources/images/Blog Image.png";
import "./style.css";

const Blog = () => {
    const [currentlyViewing, setCurrentlyViewing] = useState('ui-design');
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const { state } = useContext(AppContext);

    const viewSection = (section) => {
        setCurrentlyViewing(section);
    }

    return (
        <DefaultLayout>
            <div className="blog-page">
                <div className="container--primary">
                    <div className="blog-banner row">
                        <div className="blog-banner-texts">
                            <h1 className="blog-main-text">
                                Blog Posts
                            </h1>
                            <h2 className="sub-heading--left sub-heading--black">
                                Why are we doing this?
                            </h2>
                            <p className="body-text-thin">
                                In order to close the ever-growing gender gap in the tech space, we are encouraging you as a lady to take up take careers.
                            </p>
                            <p className="body-text-thin">
                                With our blog, we want young girls to see that pursuing a career in tech is achieveable, and they should be encouraged when they have interest in tech/STEM courses.
                            </p>
                            <div className="sm-links-buttons">
                                <Link className="sm-links" to="/"> <span className="sm-links-icon"> <FaTwitter />
                                    </span>
                                TWITTER</Link>
                                <Link className="sm-links" to="/"> <span className="sm-links-icon"> <FaLinkedin />
                                    </span>
                                LINKEDIN</Link>
                                <Link className="sm-links" to="/"> <span className="sm-links-icon"> <FaMedium />
                                    </span>
                                MEDIUM</Link>
                            </div>
                        </div>
                        <div className="blog-banner-img">
                            <img className="right-banner-image" src={bannerimg} alt="" />
                        </div>
                    </div>
                </div>

                <div id="blog-posts">
                    <div className="container--primary">
                        <div className="blog-post-container">
                            <div className="inline-headlist">
                                <ul>
                                    <li onClick={() => viewSection("all")} className="blog-inline-list">
                                        <span className="span-list">All</span>
                                    </li>
                                    <li onClick={() => viewSection("ui-design")} className="blog-inline-list ui-list">
                                        <span className="span-list">UI/UX Design</span>
                                    </li>
                                    <li onClick={() => viewSection("development")} className="blog-inline-list">
                                        <span className="span-list">Software Development</span>
                                    </li>
                                    <li onClick={() => viewSection("cybersecurity")} className="blog-inline-list">
                                        <span className="span-list">CyberSecurity</span>
                                    </li>
                                    <li onClick={() => viewSection("data-sci")} className="blog-inline-list">
                                        <span className="span-list">Data Science</span>
                                    </li>
                                    <li onClick={() => viewSection("others")} className="blog-inline-list">
                                        <span className="span-list">Others</span>
                                    </li>
                                </ul>
                            </div>
                            {currentlyViewing === "ui-design" &&
                                <section>
                                    <div className="ui-design blog-card">
                                        {/* outputting error on the webpage */}
                                        {/* { error && <div>{ error }</div>}
                                        { isPending && <div>Loading...</div> }
                                        { blogs && <BlogList blogs={blogs} /> } */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                            {currentlyViewing === "all" &&
                                <section>
                                    <div className="all blog-card">
                                        {/* All blog Posts */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                            {currentlyViewing === "development" &&
                                <section>
                                    <div className="development blog-card">
                                        {/* Software Development blog Posts */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                            {currentlyViewing === "cybersecurity" &&
                                <section>
                                    <div className="cybersecurity blog-card">
                                        {/* Cybersecurity blog Posts */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                            {currentlyViewing === "data-sci" &&
                                <section>
                                    <div className="data--sci blog-card">
                                        {/* Data Science blog Posts */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                            {currentlyViewing === "others" &&
                                <section>
                                    <div className="other blog-card">
                                        {/* other blog Posts */}
                                        {state.blogs.map(blog => {
                                            return <BlogList blog={blog} key={blog.id} />
                                        })}
                                    </div>
                                </section>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
 
export default Blog;