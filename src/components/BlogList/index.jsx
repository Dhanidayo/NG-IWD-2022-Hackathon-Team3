import { Link } from "react-router-dom";
import "./style.css";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <p>{blog.Date}</p>
                    <h3>{blog.title}</h3>
                    <p>Written by { blog.author }</p>
                    <Link to={`/blogs/${blog.id}`}>READ MORE
                    </Link>  
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;