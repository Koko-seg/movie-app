import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState, useEffect } from "react";
import { getNowPlayingMovies } from "@/lib/api/get-playing-now";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { CarouselLoading } from "./CarouselLoading";

export const MovCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const movies = await getNowPlayingMovies();
        setNowPlayingMovie(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
    setLoading(false);
  }, []);
  if (loading) return <CarouselLoading />;
  return (
    <Carousel
      className="relative "
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {nowPlayingMovie?.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <MovieCarouselItem movie={movie} movieId={movie.id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible absolute left-10 to-50%" />
      <CarouselNext className="invisible lg:visible absolute right-10 to-50%" />
    </Carousel>
  );
};

const logger = () => {};

setTimeout(() => {
  logger();
}, 5000);
