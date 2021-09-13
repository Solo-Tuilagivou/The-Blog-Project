import{useState, useEffect} from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch'; 

const Home = () => {
   const {data: blogs, isLoading, err} = useFetch('http://localhost:8000/blogs'); //data is renamed as blogs for use in the return value

    return ( 
        <div className="Home">
           {err && <div>{err}</div>}
           { isLoading && <div>Just a sec...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />} 
        </div>
     );
}
  
export default Home;
