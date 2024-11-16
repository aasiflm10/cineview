import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


interface PopularMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const MOVIE_DB_TOKEN = process.env.NEXT_PUBLIC_MOVIE_DB_TOKEN;
async function getNowPlayingMovies() : Promise<PopularMovies | null > {
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
    return response.data as PopularMovies;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return null;
  }
}


export function useNowPlayingMovies() {
    const [popularMovies, setPopularMovies] = useState<PopularMovies | null>(null);
    
    useEffect(() => {
        async function fetchMovies() {
          const data = await getNowPlayingMovies();
          setPopularMovies(data);
        }
    
        fetchMovies();
      }, []);
    

    return {popularMovies};
}
