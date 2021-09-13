import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => { 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Solo');
    const [isLoading, setIsLoading] = useState(false);
    const redirect = useHistory();


    const submitForm = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsLoading(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false);
            redirect.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={submitForm}>
                <label>Blog title: </label>
                    <input type="text"
                    required 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                 <label>Blog body: </label>
                    <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                 ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Solo">Solo</option>
                    <option value="Popo">Popo</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Submitting..</button>}
            </form>
        </div>
      );
}
 
export default Create
;