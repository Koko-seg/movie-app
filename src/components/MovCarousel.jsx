import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovCarousel = ({ nowPlayingMovies }) => {
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
        {nowPlayingMovies?.slice(0.5).map((movie, index) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;
          return (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  src={imageUrl}
                  layout="fill"
                  alt="poster"
                  objectFit="cover"
                />

                <MovieCarouselItem title={movie.title} />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible absolute left-10 to-50%" />
      <CarouselNext className="invisible lg:visible absolute right-10 to-50%" />
    </Carousel>
  );
};
