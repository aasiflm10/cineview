import { Link } from "lucide-react";
import { MovieCard } from "./movie-card";
import { usePopularMovies } from "../hooks/usePopularMovies";
import Image from "next/image";
import { type } from "os";

interface Movie {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}

interface PopularMovies {
  results: Movie[];
}
export function Movies() {
  const { popularMovies } = usePopularMovies();

  const moviesArray: Movie[] = popularMovies?.results || [];

  console.log(moviesArray);

  return (
    <div>
      <div className="p-10 text-2xl">Continue Playing</div>

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
