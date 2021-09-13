import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const{ data: blog,err,isLoading } = useFetch('http://localhost:8000/blogs/' + id );
    const redirect = useHistory();

    const deleteFunc = () => {
        fetch('http://localhost:8000/blogs/' + id,{
            method: 'DELETE'
        }).then(() => {
            redirect.push('/');
        })

    }

    return ( 
        <div className="blog-details">
           { isLoading && <div>Blog loading...</div>}
           { err && <div>{err}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Written by: {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={deleteFunc}>Delete</button>
               </article>
           )}
        </div>
     );
}
 
export default BlogDetails;