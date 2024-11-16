"use client";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { CarouselSpacing } from "./components/carousel";
import { PopularMovies } from "./components/popular-movies";
import { Footer } from "./components/footer";
import { usePopularMovies } from "./hooks/usePopularMovies";
import { NowPlayingMovies } from "./components/now-playing-movies";

export default function Home() {
  // const [text, setText] = useState("original");
  let text = "original";
  usePopularMovies();

  return (
    <div className="bg-gray">
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/${text}/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg')`,
        }}
      >
        <Navbar />

        <CarouselSpacing />
      </div>
      <PopularMovies/>
      <NowPlayingMovies/>

      <Footer />
    </div>
  );
}
