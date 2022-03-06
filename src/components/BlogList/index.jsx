import { Link } from "react-router-dom";
import "./style.css";

const BlogList = ({ blog }) => {
    return (
        <div className="blog-list">
            {/* {blogs.map((blog) => ( */}
                <div className="blog-preview">
                    <img src={blog.image} alt="" />
                    <p>{blog.Date}</p>
                    <h3>{blog.title}</h3>
                    <p>Written by { blog.author }</p>
                    <Link to={`/blogs/${blog.id}`}>READ MORE
                    </Link>  
                </div>
            {/* ))} */}
        </div>
    );
}
 
export default BlogList;