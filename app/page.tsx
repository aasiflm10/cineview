'use client'
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { CarouselSpacing } from "./components/carousel";

export default function Home() {
  const [text, setText] = useState('original')
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${text}/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg')`,
      }}
    >
      <Navbar />
      {/* <div className="flex bg-purple-400 flex h-48">
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      </div> */}
      <CarouselSpacing/>
    </div>
  );
}
