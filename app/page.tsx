"use client";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { CarouselSpacing } from "./components/carousel";
import { Movies } from "./components/movies";
import { Footer } from "./components/footer";

export default function Home() {
  const [text, setText] = useState("original");
  return (
    <div>
      <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${text}/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg')`,
      }}
      >
        <Navbar />

        <CarouselSpacing />
      </div>
      <Movies></Movies>
      <Footer/>
    </div>
  );
}
