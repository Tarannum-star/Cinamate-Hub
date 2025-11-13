import { useState, useEffect } from "react"


export const useFetch = (apipath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=9d90995ba4866651ac426b320c0eed2b&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url]);

  return {data}
  
}
