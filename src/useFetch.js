 import { cleanup } from '@testing-library/react';
import {useEffect, useState} from 'react';
 
 const useFetch = (url) => {
    const [data, setData] = useState(null);  
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    

    useEffect(() => { 
         const abort = new AbortController();

        setTimeout(()=>{ //simulating real life data fetching timeframe
              fetch(url,{signal: abort.signal})
              .then(res => {
                 if(!res.ok){
                    throw Error("Something's wrong mate gimme a sec..");
                 }
                 return res.json();
              }) 
              .then (data => {
                 setData(data);
                 setIsLoading(false); //the value of this allows it to be cut out from the viewer once the site starts running 
                 setErr(null);
              })
              .catch(err=>{
                 if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                 }else{
                  setIsLoading(false);
                  setErr(err.message);
                 }
                
                 
              })
        },1000);

        return () => abort.abort();
     },[url]);

     return {data, isLoading, err}
 } 

 export default useFetch;