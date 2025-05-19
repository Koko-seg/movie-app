import { MovieCard } from "@/components/MovieCard";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MovieCarouselItem />
      <MovieCard />
      <Footer />
    </div>
  );
}
