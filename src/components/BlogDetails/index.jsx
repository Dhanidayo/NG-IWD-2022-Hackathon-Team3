import { useParams } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';
import DefaultLayout from "../Layout";
import "./style.css";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    // const navigate = useNavigate();

    // const handleDelete = () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //     method: 'DELETE'
    //     }).then(() => {
    //     navigate('/');
    //     })
    // }

    return (
       < DefaultLayout>
        <div className="blog-details">
            <div className=" m-auto ">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p className="author">Written by { blog.author }</p>
                <div>{ blog.body }</div>
            </article>      
            )}
            </div>
        </div>
       </DefaultLayout>
    );
}
 
export default BlogDetails;