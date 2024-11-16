import { MovieCard } from "./movie-card";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

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

export function NowPlayingMovies() {
  const { popularMovies } = useNowPlayingMovies();

  const allMoviesArray: Movie[] = popularMovies?.results || [];
  const moviesArray = allMoviesArray.slice(0,4);
  console.log(moviesArray);

  return (
    <div>
      <div className="p-10 text-2xl">Now Playing</div>

      <p className="mr-4 text-right"> See More &gt;</p>
      <div className="flex gap-16">
        {
          moviesArray.map((m)=>{
            return <MovieCard release_date={m.release_date} id={m.id} poster_path={m.poster_path} title={m.title} original_language={m.original_language}/>
          })
        }
      </div>

    </div>
  );
}
