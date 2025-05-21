import { MovieCard } from "@/components/MovieCard";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { MovCarousel } from "@/components/MovCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();

      console.log(movies);
      setNowPlayingMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="container mx-auto">
      <Header />
      <MovCarousel nowPlayingMovies={nowPlayingMovies} />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
