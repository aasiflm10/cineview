import { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "buffer";

const MOVIE_DB_TOKEN = process.env.NEXT_PUBLIC_MOVIE_DB_TOKEN;
async function getMovies() {
  console.log(MOVIE_DB_TOKEN)
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${MOVIE_DB_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(url, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return null;
  }
}

export function usePopularMovies() {
    const [popularMovies, setPopularMovies] = useState({})
    
    useEffect(() => {
        async function fetchMovies() {
          const data = await getMovies();
          setPopularMovies(data);
        }
    
        fetchMovies();
      }, []);
    

    return {popularMovies};
}
