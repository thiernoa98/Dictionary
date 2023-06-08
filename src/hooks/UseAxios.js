import { useEffect, useState } from 'react'
import axios from 'axios';

function UseAxios() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 async function customFetch(){
   try {
        let payload = await axios.get(url);

        setData(payload.data);
        setLoading(false);
        setError(null);
   } catch (e) {
        if (e.response.status === 404) {
            setError("data not found");
            setData(null)
            setLoading(false)
        }else{
            setError(e.message);
            setData(null);
            setLoading(false);
        }
   } 
 }

 useEffect(()=>{
    if (loading) {
        customFetch(url)
    }
 }, [loading])


  return [setUrl, data, loading, setLoading, error]
}

export default UseAxios
