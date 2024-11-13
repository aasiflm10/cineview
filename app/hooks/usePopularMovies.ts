import { useEffect, useState } from "react";
import axios from "axios";

async function getMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjgyZjcwNmZlNGRiM2MyNjJjOGRhNjRjYmU2YzQyYyIsIm5iZiI6MTczMTQ5MDI5Ny42NDI0MDMsInN1YiI6IjY0NmVlMzkwZWEzOTQ5MDExNzE0NjQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5nFyvy6yZRlf2WyxV7lFy0U4M1v9RlbAZrEL7jiWLrQ",
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
