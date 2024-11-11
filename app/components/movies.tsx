import { Link } from "lucide-react";
import { MovieCard } from "./movie-card";

export function Movies(){
    return <div>
        <div className="p-10 text-2xl">
          Continue Playing
        </div>
        <p className="mr-4 text-right"> See More &gt;</p>
        <div className="flex gap-16">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>

}